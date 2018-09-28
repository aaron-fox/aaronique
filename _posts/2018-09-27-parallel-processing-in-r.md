---
layout: post
title:  "Parallel Processing in R"
date: 2018-09-27 -5000
category: ["studies", "archive", "r"]
author: Aaron Wang
---

This post shows some codes doing parallel processing for modeling training in R with doParallel package.

```R
library(caret)
library(doParallel)
library(e1071)
set.seed(666)
# use iris data set as example
data <- iris
# create 10 folds cross validation
folds <- 10
index.test <- createFolds(data$Species, k = folds)

# write a function to fit some models, each go through several runs
GenerateModel <- function(model.name, runs, data, index.test) {
  # create models and accuracy list, they will be returned at the end of run
  models <- list()
  accuracy <- data.frame(matrix(NA, nrow = folds, ncol = length(model.name)))
  names(accuracy) <- model.name
  # loop through each model
  for (j in 1:length(model.name)) {
    model.selected <- model.name[j]
    # use foreach to run parallel processing, the result needs to be assigned to another variable
    rs <- foreach(i = 1:runs) %dopar% {
      # slice data into train and test
      train <- data[-index.test[[i]],]
      test <- data[index.test[[i]],]
      # start training
      model <- train(Species ~ ., method = model.selected, data = train)
      prediction <- predict(model, test)
      result <- confusionMatrix(prediction, test$Species)$overall[1]
      # this will return model and result from all runs and put them in rs
      return(list(model, result))
    }
    # get first item of rs (model)
    models[[j]] <- sapply(rs, "[", 1)
    # get second item of rs (accuracy)
    accuracy[,j] <- sapply(rs, "[", 2)
  }
  return(list(models, accuracy))
}
# we use LDA and CART for demo
model.name <- c("lda", "rpart")
# register a 8 core parallel processing
registerDoParallel(cores = 8)
# run through all the cross validation folds
runs <- 10
# get and assign result
rs <- GenerateModel(model.name, runs, data, index.test)
models <- rs[[1]]
accuracy <- rs[[2]]
```

The returned models is a list with structure:

| model name | runs | model stored at  |
| :--------- |:----:| ----------------:|
| lda        | 1    | models[[1]][[1]] |
| lda        | 2    | models[[1]][[2]]  |
| lda        | 3    | models[[1]][[3]]  |
| lda        | ...  | models[[1]][[...]]|
| rpart      | 1    | models[[2]][[1]]  |
| rpart      | 2    | models[[2]][[2]]  |
| rpart      | 3    | models[[2]][[3]]  |
| rpart      | ...  | models[[2]][[...]]|
{: style="width: 100%; line-height: 2em"}

The accuracy is a data.frame with structure:

| runs | lda accuracy | rpart accuracy |
| :--- |:------------:|---------------:|
| 1    | 0.9          | 0.9            |
| 2    | 0.9          | 0.9            |
| 3    | 0.9          | 0.9            |
| ...  | ...          | ...            |
{: style="width: 100%; line-height: 2em"}