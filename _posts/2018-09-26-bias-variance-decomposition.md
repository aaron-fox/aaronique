---
layout: post
title:  "Bias - Variance Decomposition"
date: 2018-09-26 -5000
category: ["studies", "archive", "math"]
author: Aaron Wang
---

Expected prediction error derivation in Bias - Variance Decomposition.

Use $$\hat f$$ to estimate $$y=f+\epsilon$$ where noise $$\epsilon$$ has mean $$0$$ and variance $$\sigma^2$$.

$$
\begin{aligned} 
EPE(f, \hat f)&=E[(f+\epsilon-\hat f)^2] \\ 
&=E[(f-\hat f)^2+2(f-\hat f)\epsilon+\epsilon^2] \\ 
&=E[(f-\hat f)^2]+2E[f-\hat f]E[\epsilon]+E[\epsilon^2] \\ 
&=E[(\hat f-E[\hat f]+E[\hat f]-f)^2]+\sigma^2 \\ 
&=E[(\hat f-E[\hat f])^2]+2(E[\hat f]-E[\hat f])(E[\hat f]-E[f])+E[(E[\hat f]-f)^2]+\sigma^2 \\ 
&=E[(\hat f-E[\hat f])^2]+(E[\hat f]-E[f])^2+\sigma^2 \\ 
&=Var[\hat f]+Bias[\hat f]^2+\sigma^2 
\end{aligned} 
$$
