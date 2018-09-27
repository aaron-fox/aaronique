---
layout: post
title:  "Expected Prediction Error"
date: 2018-09-26 -5000
category: ["studies", "archive", "math"]
author: Aaron Wang
---

Expected Prediction Error (EPE) & Bias - Variance Decomposition.

$$y=f+\epsilon$$, $$\hat f$$

$$EPE(f, \hat f)=E[(f+\epsilon-\hat f)^2]$$

$$=E[(f-\hat f)^2+2(f-\hat f)\epsilon+\epsilon^2]$$

$$=E[f-\hat f]^2+2E[f-\hat f]E[\epsilon]+E[\epsilon^2]$$

$$=E[\hat f-E[\hat f]+E[\hat f]-f]^2+\sigma^2$$

$$=E[\hat f-E[\hat f]]^2+2(E[\hat f]-E[\hat f])(E[\hat f]-E[f])+E[E[\hat f]-f)]^2+\sigma^2$$

$$=var(\hat f)+bias(\hat f)^2+noise^2$$
