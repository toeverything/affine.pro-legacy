---
title: A Recommendation for interface-based programming
author: Chi Zhang, Ran Chen, Fanjing Zhang
tags: Let’s make XXX
cover: ./cover.jpg
description: When implementing custom data structures, it is best to keep methods such as forEach, find and findLast coherent with Javascript's interface standards
created: 2022-07-08
updated: 2022-07-08
layout: blog
---

When implementing custom data structures, it is best to keep methods such as forEach, find and findLast coherent with Javascript's interface standards. This is beneficial to the future upgrade of data structure, and also saves you time to remember different realization processes of the same interfaces. Taking forEach as an example \[1\]:

> The forEach() method executes the provided callback once for each value which actually exists in the Set object. It is not invoked for values which have been deleted. However, it is executed for values which are present but have the value undefined.

> callback is invoked with three arguments:

- > the element value
- > the element key
- > the Set object being traversed

> There are no keys in Set objects, however, so the first two arguments are both values contained in the Set. This is to make it consistent with other forEach() methods for Map and Array.

> If a thisArg parameter is provided to forEach(), it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

> Each value is visited once, except in the case when it was deleted and re-added before forEach() has finished. callback is not invoked for values deleted before being visited. New values added before forEach() has finished will be visited.

> forEach() executes the callback function once for each element in the Set object; it does not return a value.

In this case, it is not hard to tell that interface-based programming is a time saver. Without interface-based programming, software architecture cannot be low in coupling and high in cohesion.

# References

\[1\]. [MDN contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach/contributors.txt). (Mar 28, 2022). _Set.prototype.forEach()_. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Set/forEach

\[2\] Title picture from: https://unsplash.com/photos/SYTO3xs06fU
