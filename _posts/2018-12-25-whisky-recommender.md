---
layout: post
title:  "Whisky Recommender"
date: 2018-12-25 -5000
category: ["works", "archive", "whisky", "data mining", "eda", "visualization", "maps", "r", "python", "javascript"]
author: Aaron Wang
---

I am not a heavy drinker, but a hundred percent whisky lover. Influenced by the environment I grew up with, I am curious towards any alcohol and its power to shape local traditions as well as a whole region's culture. There is very few, if any, whisky distillery in China, which also indicates its underwhelming influence and little adoption. The majority of whikskies are sold in bars, categorized as the "foreign wine" along with vodka, brandy, and others. Understanding towards whisky is staggeringly poor, with only little yet confusing information available on the internet. This case is getting better. But before I came to Canada several years ago as a young man, I had nearly zero knowledge of whisky itself, let along its culture.

Whisky remained mysterious stuff until I tried various types at a tasting party in a friend's home. Immediately I fell in love with the complexity it provides and the distinguished smoky yet fruity flavor. So I bought some whiskies and a book, named Whisky Classified by David Wishart, which uses statistical methods to analyze the flavor profiles of various whiskies and cluster them into different groups. This triggers my desire to develop a whisky recommendation app using similar methods, which is how this work happened.

To have a better reading experience, I highly recommend you to go directly to the website [whisky.aaronique.com](https://whisky.aaronique.com). The below contents are also published there. Hope you find your beloved bottle using this app. Enjoy!

## About

|                      |                                                                                                                          |
| :------------------- | -----------------------------------------------------------------------------------------------------------------------: |
| **Developer**        |                              [Aaron Wang](mailto:liangwang.aaron@gmail.com) @ [aaronique.com](https://www.aaronique.com) |
| **Language**         |            [R](https://www.r-project.org/), [Python](https://www.python.org/), [JavaScript](https://www.javascript.com/) |
| **Framework**        |                                                                                    [R Shiny](https://shiny.rstudio.com/) |
| **Library** | [shiny](https://www.rdocumentation.org/packages/shiny), [shinydashboard](https://www.rdocumentation.org/packages/shinydashboard), [shinyWidgets](https://www.rdocumentation.org/packages/shinywidgets), [shinyjs](https://www.rdocumentation.org/packages/shinyjs), [DT](https://www.rdocumentation.org/packages/dt), [tools](https://www.rdocumentation.org/packages/tools), [reshape2](https://www.rdocumentation.org/packages/reshape2), [plotly](https://www.rdocumentation.org/packages/plotly), [leaflet](https://www.rdocumentation.org/packages/leaflet), [leaflet.extras](https://www.rdocumentation.org/packages/leaflet.extras), [r2d3](https://rstudio.github.io/r2d3/), [Selenium](https://www.seleniumhq.org/), [D3](https://d3js.org/)    |
| **Deploy on**        |                                                                                   [AWS EC2](https://aws.amazon.com/ec2/) |
| **Host at**          |                                                                     [whisky.aaronique.com](https://whisky.aaronique.com) |
| **Git Repo**         |                                            [whisky-recommender-app](https://github.com/aaronique/whisky-recommender-app) |
{: style="width: 100%; line-height: 2em"}

## Background

In human history, it was discovered that intentionally fermented drinks existed as early as the Neolithic period, and the production of alcoholic drinks could trace back to 7000–5600 BC. Distillation was possibly practiced by the Babylonians in Mesopotamia in the 2nd millennium BC to make perfumes and aromatics. There is evidence that medieval Arabs distilled alcohol, and the process later spread to Italy during the 12th century. In China, archaeological evidence indicates the distillery of alcohol began during the 12th century Jin or Southern Song dynasties.

The distillation technique spread to Ireland and Scotland no later than 15th century, where the initial purpose was to create medicines. In Scotland, the first evidence of whisky production comes from an entry in the Exchequer Rolls for 1494-95, which lists an order from King James IV for malts to make aqua vitae (spirit alcohol). By the 16th century, whisky distillation was widely practiced on farms throughout Scotland and Ireland. The tax law on spirits was introduced in 1644 under which licensed commercial distillers started to operate by the end of the 17th century. With demand increased dramatically during the 18th century, the official production of aqua vitae almost tripled itself from 1708 to 1738, during which the term uisce beatha (the name for whisky in Irish) transited to uiskie, then to usky and finally to whiksy.

During the early production of whisky, only a single type of malt was used. In 1850, Andrew Usher introduced the idea of blended whisky, which is distilled from unmalted barley, wheat of maize. By the 1880s, the French brandy industry was devastated by the phylloxera pest that ruined much of the grape crop. As a result, whisky became the primary liquor in many markets.

During World War I, many distilleries were closed to preserve barley stocks for food, and the distillation stopped again during World War II. By 1945, the Scotch whiksy industry had suffered 45 years decline, caused by three wars, US prohibition, temperance, aggressive taxation, and hostile legislation. Things could not go worse in such a situation. Many distilleries reopened during the 1960s and modern techniques were widely used for greater efficiency.

Nowadays, Scotland is still the leading force in whisky production. Other regions like Ireland, US, Canada, and Japan also have decent market share with their unique products (check Distillery Map and Data - Distillery). Different ingredients besides malt are utilized to produce a variety of whisky types. Though a lot of distilleries still prefer to maintain the classic way in whiksy production, new techniques were introduced to meet higher market demand.

Using scientific methods to improve whisky production can trace back to victoria period, nonetheless, the analysis with the help chemistry was possibly introduced in the 70s. Studies applying statistics, especially flavor classifications on whiskies only emerged around 1990s. And it still remains an underdeveloped area with a handful of papers published. For papers and books in this subject, please refer to About - Reference.

Inspired by these papers, this work utilizes data science methods to analyze and classify whisky flavor, based on which a recommender system is built to suggest potential whisky candidates that the user may favor. It also provides a distillery map and other data visualizations to assist users for a better understanding of this work and whisky in general. For details, please go to Ideas Behind - Data Collection, EDA and Recommender. To learn the limitation of this work, please refer to the Ideas Behind - Limitation.

## Data Collection

All the data in this study are obtained through web scraping using [Selenium](https://selenium-python.readthedocs.io/) with Python. The benefit of using Selenium lies in its ability to retrieve dynamic contents, such as rendered canvas, which is quite challenging to manage without a browser automation tool like this. Selenium also provides the function to wait for specific elements to be fully loaded before any scrapping happens. This is always crucial which could greatly improve success rates. The codes I used for scrapping can be found at the Git Repo, which is posted under About - Resource. Although scrapping is generally not considered illegal (check [this answer](https://stackoverflow.com/a/32674131) for details), it's better to maintain at a non-disruptive rate to avoid potential harm to the websites.

When scraping is finished, the data collected are fed into a pipeline to be restructured, cleaned, and analyzed. Only data that relate to the topic and benefit the study are retained, with others discarded. This whole process is lengthy, yet rewarding. In the end, I acquired three datasets which contain information about whiskies, distilleries and flavor vocabulary respectively. These datasets are the foundations for exploratory data analysis and preprocessing, where the big ones are sliced into smaller ones and more datasets are generated and stored offline to relieve online computation loads.

Data collection ends only when the data collected could answer the proposed question. The process typically follows a collect - tidy - analysis - refine - recollect pattern that requires some patience and knowledge. This procedure is well explained in the book [The Art of Data Science](https://leanpub.com/artofdatascience) which offers deep insights on other subjects related to this topic as well.

Due to the scarcity of whisky data available online, the above datasets used in this study are not sufficient to cover all whisky products. Also, ratings and tasting notes are highly subjective which could vary a lot between individuals. This may result in biases which should be considered and studied when acquiring data from heterogeneous sources (such as rating and reviews from different websites).

For the limitation of data collection in this work, please refer to Ideas Behind - Limitation.

## EDA

If data collection can be described as preparing a gift, then exploratory data analysis (EDA) is like opening the box. Generally, you can guess what's inside based on some knowledge and experience, but the interesting part is that it never ceases to surprise you no matter how well informed you are.

Since I do not have any existing user profiles or ratings, a knowledge-based [recommender system](https://en.wikipedia.org/wiki/Recommender_system) is the only choice. Such a system usually requires the construction of an item characteristic space, a linking mechanism to translate user input into this space and a way to search and rank items. It is largely a matrix completion, searching and ranking problem where a lot of methods can be used. But in this section, we focus on the exploration of datasets.

To build a knowledge-based recommender system, the data collected should contain items (whiskies) and their properties. For whiskies, a large amount of information can be extracted and utilized, but what matters most on the purchase decision given a similar budget range are the tastings (flavors) and public opinions (ratings). For general knowledge of whisky, please refer to Ideas Behind - Background.

In order to acquire such properties, which, in other words, means the quantification of flavors, I tried text mining on whisky reviews but it turned out to be a poor idea. The reasons are:

- The contents of whisky reviews vary a lot, from short comments describing flavors to a several pages article introducing the history and personal stories.
- Useful reviews are often short, which means terms that describe the most distinguished flavor may only appear once. Methods like term frequency can be used but may eventually result in a unitary matrix where flavors with different significant levels are given the same weight. This could cause a loss of information and diversity.
- Whisky vocabulary lacks a database for sentiment analysis, which makes it very hard to predict the writer's opinion simply from a review article.

Due to the reasons above, I chose to obtain data from websites with explicit flavor profiles. It has certain limitations (see Ideas Behind - Limitation), but data acquired in such a way are more accurate and less vulnerable to information loss.

The resulted dataset contains flavors as follows:

- peaty, smoky, briny, salty, oily, full, rich, sweet, vanilla, floral, fruity, tart, herbal, spicy

These flavors range from 0 to 100 where 0 indicates "not a tiny bit at all" and 100 describes "holy cow that's a lot". In the following EDAs, I will use correlation, PCA, clustering, and regression to analyze these flavors and try to find their characteristics.

### Correlation between Flavors

Analyzing the correlation between flavors is a very natural thought after looking at their names. After all, briny and salty look alike while peaty and smoky sound the same.

To conduct this analysis, I extract flavor profiles from the whisky data and run a correlation with a significance test. Then the resulted matrix is visualized where any result with a p-value larger than 0.05 (insignificant in this case) is highlighted with a red cross.

A higher correlation between flavors is colored with a darker blue. And the negative ones are colored in red. It seems colors near the diagonal "1"s are darker. This is because I selectively did so for a better illustration. These colors can be random if the columns happen to be so as well.


```r
df <- read.csv("../data/whisky.csv")
df.profile <- df[, 9:22]
corr <- cor(df.profile)
corr.mtest <- cor.mtest(df.profile)

corrplot(corr,
  method = "color", type = "upper", p.mat = corr.mtest$p, addCoef.col = "black",
  sig.level = .05, pch.col = "red", tl.col = "black", number.cex = .8
)
```

<img src="/assets/posts/2018-12-25-whisky-recommender/unnamed-chunk-2-1.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" style="display: block; margin: auto;" />

In real practice, I am only concerned with correlations that are either high or low. The below graph only shows correlations no less than 0.4, which confirms my assumptions that peaty and smoky, briny and salty are relatively highly correlated. These words seem to go into several groups, but for now, it's hard to separate them apart.


```r
corr.large <- corr
corr.large[corr.large < 0.4] <- NA

corrplot(corr.large,
  method = "color", type = "upper", p.mat = corr.mtest$p, addCoef.col = "black",
  sig.level = .05, pch.col = "red", tl.col = "black", number.cex = .8
)
```

<img src="/assets/posts/2018-12-25-whisky-recommender/unnamed-chunk-3-1.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" style="display: block; margin: auto;" />

The next graph visualizes correlations no larger than 0.1, where peaty, smoky, briny and vanilla are lowly correlated with other flavors which means they are quite distinguishable during the tasting. Another reason may be a biased selection of the flavors, see Ideas Behind - Limitation for details.


```r
corr.small <- corr
corr.small[corr.small > 0.1] <- NA

corrplot(corr.small,
  method = "color", type = "upper", p.mat = corr.mtest$p, addCoef.col = "black",
  sig.level = .05, pch.col = "red", tl.col = "black", number.cex = .8
)
```

<img src="/assets/posts/2018-12-25-whisky-recommender/unnamed-chunk-4-1.png" title="plot of chunk unnamed-chunk-4" alt="plot of chunk unnamed-chunk-4" style="display: block; margin: auto;" />

### PCA & Principal flavors

[Principal component analysis (PCA)](https://en.wikipedia.org/wiki/Principal_component_analysis) is widely used in dimensionality reduction, where correlated variables are converted into linearly uncorrelated ones. Based on the previous analysis, our dataset contains some highly correlated flavors which could possibly be combined into fewer ones. Also, since our brains can only imagine no more than 3 dimensions, this method helps to visualize data as well.

Since such a process is a little abstract, an interpretable description can be:

- I want to know what are the major flavors that matter most during the tasting. I know the result may contain many but let's limit it to using two words to describe a major direction, such as apple and banana as the first and nutty and creamy as the second. In such a way I can convey most characteristics of a whisky using fewer words. An example can be a whisky that is not so apple and banana but very nutty and creamy.

Here I use the same flavor profiles like those I used in the previous section. Here, they are calculated for their PCA rotation, which can also be viewed as the weights on various flavors where more important ones are given higher weights. The top two flavors are selected as the description of this principal component (PC). And only unique flavors that never appear in previous PCs are displayed. The result is:

- Fruity & Floral, Peaty & Smoky, Rich & Full

These are the principal flavors of whiskies, at least according to this dataset. And they explain nearly 60% percent of the total variance which indicates it's feasible to use only three dimensions to describe a whisky's flavor, which is also what I did in Recommender - Flavor Profile and Insight - Cluster.


```r
pca <- prcomp(df.profile)
summary(pca)$importance[3,1:3,drop = F]
```

```
##                           PC1    PC2     PC3
## Cumulative Proportion 0.27711 0.4451 0.57158
```

```r
pca.top <- data.frame()

k <- 2
for (i in seq(dim(pca$rotation)[2])) {
  pca.i <- sort(abs(pca$rotation[, i]), decreasing = T)[1:2]
  names <- names(pca.i)
  pca.top <- rbind(pca.top, data.frame(pc = i, name = names, value = pca.i, unique = !(names %in% pca.top$name)))
}
pca.top[pca.top["unique"] == T,][,-4]
```

```
##         pc    name     value
## fruity   1  fruity 0.4133503
## floral   1  floral 0.3276811
## peaty    2   peaty 0.5246750
## smoky    2   smoky 0.4884919
## rich     3    rich 0.5254929
## full     3    full 0.5206254
## spicy    4   spicy 0.6378590
## oily     5    oily 0.6442631
## vanilla  6 vanilla 0.7707902
## tart     7    tart 0.5618651
## herbal   9  herbal 0.3962581
## sweet   11   sweet 0.6414460
## briny   14   briny 0.7254733
## salty   14   salty 0.6728940
```

### Clustering and Box Plots

Loosely speaking, the previous section can be seen as an effort to cluster flavors. But it is fundamentally different since PCA serves more like a reconstruction or transformation rather than clustering. Also, using two flavors to name a PC is a heuristic choice without a solid proof. And the whole process solely serves for interpretability and visualization.

In this section, whiskies are clustered into five groups using the k-means method. The work is done offline and interpretable names are added to each cluster group for better illustration. These names are derived from the PCA mentioned above which, again, has limitations and cannot fully explain all the flavors. Nevertheless, the below plot still serves as a good example where carefully selected information, even little, can explain a lot.

For readers who are not familiar with box plot, it's actually very intuitive and informative. Majority of the values fall in the box, others fall within the line with only a few outliers indicated with dots. 

These plots represent some interesting patterns on whisky flavors, which, to a certain degree, also defines the drinker groups, where usually a novice starts from not fruity nor smoky, to an intermediate who prefers average smoky and fruity, finally to a connoisseur who seeks either strong smoky or fruity. Generally, drinkers prefer rich and full-bodied whiskies as they provide more tasting levels than delight ones.


```r
df.cluster <- read.csv("../data/cluster.csv")
df.profile["cluster"] <- as.character(df.cluster$cluster.5)

df.melt <- melt(df.profile, id.vars = c("cluster"))

ggplot(df.melt) +
  geom_boxplot(aes(x = variable, y = value)) + 
  facet_wrap(~cluster) + 
  theme(axis.text.x = element_text(angle = 90, hjust = 1))
```

<img src="/assets/posts/2018-12-25-whisky-recommender/unnamed-chunk-6-1.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" style="display: block; margin: auto;" />

### Predict Ratings based on Flavor

Here is the final section as well as a toy example to demonstrate what could possibly go wrong with the analysis. A tempting question to answer while working on this work is:

- Could flavors predict ratings?

An intuitive answer is "possibly" since there are always market trends. But what if the information provided by the flavors is not enough to make such a prediction, which means either the concept is not well related or the data are insufficient. In order to find out, let's try the linear regression first and see what happens.

The below codes construct a linear regression model and feed the flavors values through it to predict ratings. The RMSE in the testing sample is very pathetic since a whisky rated 85/100 has a decent chance to be predictively rated from 80 to 90, which is not good at all in real practice. Also, the Rsquared is only around 0.24 which indicates there are still a large number of residuals not explained.


```r
set.seed(112358)

data <- df[, c(7, 9:22)]

test.index <- createDataPartition(data$rating, times = 1, p = 0.2, list = F)

train <- data[-test.index, ]
test <- data[test.index, ]

model <- train(rating ~ ., method = "lm", data = train)

prediction <- predict(model, test)
result <- postResample(prediction, test$rating)
result
```

```
##      RMSE  Rsquared       MAE 
## 5.1087236 0.2383038 3.8922672
```

Maybe it's due to the model we selected is linear. Here we try a nonlinear method which improves the accuracy a bit but not much. I also tested other models but they all failed to deliver an acceptable result. This is actually easy to understand. 14 flavor profiles are not sufficient to tell a good whisky from a bad one. Two whisky may share similar profiles but the joy of tasting these flavors may vary a lot.

Indeed, it's very hard to predict ratings solely from the item domain. A feasible way to do this is to use collaborative filtering method. But facing the cold starting problem, this work is not eligible to adopt this method or similar.


```r
model <- svm(rating ~ ., data = train)

prediction <- predict(model, test)
result <- postResample(prediction, test$rating)
result
```

```
##     RMSE Rsquared      MAE 
## 4.597379 0.380137 3.420703
```

### Conclusion

The EDA here presents four different but related analysis providing us with valuable insights of the collected data. It is also the cornerstone to construct a recommender system, without which the structure would simply fall apart.

In real practice, data collection and wrangling take no less (possibly a lot more) time than recommender system building. And what matters most is the quality of data. No matter how good the algorithms are, it's always the truth for the garbage in, then garbage out. The EDA can not turn stone into gold, but it does turn iron into steel if done in the right way.

## Recommender

The core feature of this work is the recommender system. And the function it provides is rather simple, i.e. accept user input and offer recommendations. To give a better illustration, I use a state diagram below where a successful recommendation is achived with several steps.

The first step is to selectively pick data according to the filtering parameters from user inputs. These parameters could include spirit type, cost, rating, and abv etc. Then it is necessary to project user input into the item property space, which means we need to find a way to translate these inputs into flavor profiles. This step is done using the user profile parameters as well as some preprocessed data. By doing this, we obtain a user flavor profile so we can measure the similarity between it and items in our database. The most similar items are denoted as top k items and they are passed to another algorithm to generate matching scores, which are calculated considering different weighting sets among correlation, rating, and diversity. The top n items with the highest scores are returned according to the display parameter n. And only those n items are displayed on the screen as the recommendation results.

The diagram below illustrates this process. Also feel free to check codes in my Git Repo posted in About - Resource page for detailed implementations.

<img src="/assets/posts/2018-12-25-whisky-recommender/recommender.svg">

## Limitation

### Existing Work

Using statistical methods to study whisky characteristics is a relatively underdeveloped area with only a handful of papers published. Commercial websites specializing in whiskies tend to only provide historical and product information, reviews and tasting notes rather than scientific analysis report. A few individuals and websites that offer such reports often focus on a single area like database construction or inferential analysis. Websites that have implemented whisky recommender systems keep them as a commercial secret which is not available to the general public. There are a handful of software projects that give recommendations, but they are mostly based on a single source of distillery flavor data thus could only recommend distilleries instead of individual bottles to the user.

### Data Collection

There are very few data available for whisky products and distilleries, most of which is incomplete and outdated. Public data for whisky products usually do not cover any flavor profile which makes it impractical to be used in this work. Some commercial websites have the recent data but will not make it public due to apparent reasons. Therefore, web scraping is the only choice to acquire the proper data but it requires a lot of trials and errors in real practice.

### Whiksy Flavor Vocabulary

To the date of completion of this work, there is no standard or any dominant whisky flavor vocabulary used by experts as well as amateurs. People tend to borrow words from wine to describe whiskies, which is often enough to write reviews and even reports. But for classification and recommender systems, a more systematic method should be developed. The reason for this lies in the fact that some words to describe flavors overlap each other a lot, such as briny and salty. And not all flavors are equal, some provide more information than others. This can be clearly illustrated in the Ideas Behind - EDA where the first three principal components explain nearly 60% of the total variance. Thus when constructing a flavor profile for whisky, the words used in this process should be very carefully selected to ensure that the dominant flavors are always included as weel as a consideration for subordinate ones for greater descriptive diversity.

A properly constructed flavor vocabulary also helps in text mining based on reviews to build flavor profiles. A tree structure flavor vocabulary is preferred (like the one in Insight - Flavor Vocabulary) since subordinate flavors can be combined into fewer flavor by climbing down the tree. A database designed for sentiment analysis in whisky domain may also be needed to predict opinions and ratings from reviews, which is currently not available to the public.

### Cold Start Problem

Various types of recommender systems have been developed these years for different purposes with their unique characteristics. Common ones can include user based, item based, content-based and knowledge-based recommender systems. Methods used for these systems vary from collaborative filtering to latent factor models. But generally, most techniques can be viewed to solve a matrix completion and reconstruction problem, where a matrix or a series of matrices are used to link users and items together.

For most online recommender systems like Netflix or Amazon, there is a mature user and item dataset that is already constructed. Such a database is the foundation of recommender systems without which methods like collaborative filtering cannot be achieved.

For standalone recommender system like this work, there is no previous user database available. Such a problem is typically referred to as the cold start problem which is very common in any new recommender systems. Most companies tackle this issue by trying to increase their user base, which is not practical for this work. Therefore, a knowledge-based recommender system is the only choice but such a system lacks the ability for dynamic recommendations since the item property space and the algorithms used are relatively fixed. This is also a well-known issue, thus, only complicated products purchased with less frequency and higher prices, like cars, are good candidates for this method. Whiskies can fit into this category, but it's still better to have user data available in order to give a more accurate and dynamic recommendation. After all, more data are usually better than less if both used properly and data are always the most crucial factor which determines the upper quality of the final work.

## Reference

### Books

[Recommender Systems: The Textbook](http://a.co/d/dpuZlj3)

[The Elements of Statistical Learning: Data Mining, Inference, and Prediction](http://a.co/d/2CsSuDP)

[Statistical Inference](http://a.co/d/3ENYufy)

[Whisky Classified: Choosing Single Malts by Flavour ](http://a.co/d/cf5epwW)

[The Art of Data Science](https://leanpub.com/artofdatascience)

### Papers

[Piggott, J. R., & Jardine, S. P. (1979). Descriptive sensory analysis of whisky flavour. Journal of the Institute of Brewing, 85(2), 82-85.](https://onlinelibrary.wiley.com/doi/pdf/10.1002/j.2050-0416.1979.tb06830.x)

[Lapointe, F. J., & Legendre, P. (1994). A classification of pure malt Scotch whiskies. Applied Statistics, 237-257.](http://adn.biol.umontreal.ca/~numericalecology/Reprints/Appl%20Stat%2043,%201994.pdf)

[Adomavicius, G., & Tuzhilin, A. (2005). Toward the next generation of recommender systems: A survey of the state-of-the-art and possible extensions. IEEE Transactions on Knowledge & Data Engineering, (6), 734-749.](http://pages.stern.nyu.edu/~atuzhili/pdf/TKDE-Paper-as-Printed.pdf)

[Wishart, D. (2009). The flavour of whisky. Significance, 6(1), 20-26.](https://rss.onlinelibrary.wiley.com/doi/pdf/10.1111/j.1740-9713.2009.00337.x)

### Whisky Data

[Classification of whiskies](http://outreach.mathstat.strath.ac.uk/outreach/nessie/nessie_whisky.html)

[Scotch Whiskies Data](http://adn.biol.umontreal.ca/~numericalecology/data/scotch.html)

[Meta-Critic Whisky Database](https://whiskyanalysis.com/index.php/database)

[Whisky Monitor Database](https://www.whisky-monitor.com/home.jsp)

### Websites

[The Edinburgh Malt Whisky Tour](http://www.dcs.ed.ac.uk/home/jhb/whisky/index.html)

[Selfbuilt's Whisky Analysis](https://whiskyanalysis.com)

[Distiller](https://distiller.com)

[Flaviar](https://flaviar.com)

[Malt Madness](https://www.maltmadness.com/index.html)

[Wikipedia: Distillaion](https://en.wikipedia.org/wiki/Distillation)

[Wikipedia: Whisky](https://en.wikipedia.org/wiki/Whisky)

[Wikipedia: List of whisky brands](https://en.wikipedia.org/wiki/List_of_whisky_brands)

[Wikipedia: List of whisky distilleries in Scotland](https://en.wikipedia.org/wiki/List_of_whisky_distilleries_in_Scotland)

### Existing Work

[Whiskython](https://github.com/cuducos/whiskyton)

[Whisky Flavor Map](https://whiskyanalysis.com/index.php/methodology-introduction/methodology-flavour-comparison)
