---
title: Using Enums in TypeScript
author: Xiwen Tu, Yifeng Wang , Fanjing Zhang
tags: Let’s make XXX
cover: ./cover.jpg
description: This article is not intended to teach you how to use enums in Typescript, but rather to discuss the problems of using them in real-world scenarios, based on our experiences and some references
created: 2022-07-21
updated: 2022-07-21
layout: blog
---

## Prelude

This article is not intended to teach you how to use enums in Typescript, but rather to discuss the problems of using them in real-world scenarios, based on our experiences and some references.

Note that [link](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJSAA) marks a hyperlink to TypeScript Playground for checking out examples.

## Introducing Enums

Enums are provided by TypeScript to define constants with names that clearly express intent, or to create a set of distinguished cases.

The value and type of an enum are one and the same, and the type of an enum member is a subtype of that enum type. There are two scenarios to be aware of when defining enums.

- When all enum members are literal enum values, all of these members are both values and types.
- If there are non-literal members in the enum, then all members of that enum can only be used as values.

```typescript
/* enum members are all literal values */
enum Day {
  Monday,
  Tuesday,
  Wednesday,
}

const monday: Day = Day.Monday; // valid 😎
const thusday: Day.Tuesday = Day.Tuesday; // valid 😎

/* enum members contain non-literal enum values */
enum NextDay {
  Monday,
  Tuesday,
  Wednesday = Day.Wednesday /* non-literal enum values */,
}

const nextMonday: NextDay = NextDay.Monday; // valid 😎
const nextThusday: NextDay.Tuesday = NextDay.Tuesday; // invalid 😓
const nextWednesday: NextDay.Wednesday = NextDay.Wednesday; // invalid 😓
```

You can see that Day and NextDay are compiled into JavaScript with exactly the same structure ([link](https://www.typescriptlang.org/play?#code/PQKgBIWeaHxygIRoGiqF+Ew9GaHVtQRumHnE6geBTCYAUAKYB2ArgLZgAiAhgJ5gDeBYbYAsgPYkAmDAGlbsAKmSIBnfvSHswAdSK8Sk6UIC+AbgIEAxjwkAXMBR7SAXDQZgAvFfoA6bnwaawwYGAButADYBLXj0DY0MACzIpBks6RzFVaztYh3io+jcPbz9AnQJQSFg4QFBlQGoVQD109CwoXHxicioAOSIAD0NY5mE2ZzVOsFSeuUVlBMYkhgchlTSBd08KzBwCLR19EiMwFVbu6LAm1va7Pbbx7fTZrICg1fXNwxEItMsj5P7E3ZbjuPE0jM9-Eh8l2Ca2Mt0mIyeH2S4LStne+3GMOkvzA-0BgSAA)).

```typescript
var Day;
(function (Day) {
  Day[(Day["Monday"] = 0)] = "Monday";
  Day[(Day["Tuesday"] = 1)] = "Tuesday";
  Day[(Day["Wednesday"] = 2)] = "Wednesday";
})(Day || (Day = {}));

var NextDay;
(function (NextDay) {
  NextDay[(NextDay["Monday"] = 0)] = "Monday";
  NextDay[(NextDay["Tuesday"] = 1)] = "Tuesday";
  NextDay[(NextDay["Wednesday"] = 2)] = "Wednesday";
})(NextDay || (NextDay = {}));
```

## Fundamentals of Enums

Firstly in JavaScript, we generally tend to use objects for defining constant configurations. But in TypeScript, defining these constants with enums can be more terse and expressive.

```typescript
/* JS: Constants Config */
const SERVICE_STATUS = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  UNKONW_ERROR: 500,
};

/* TS: Enum Config */
enum SERVICE_STATUS {
  SUCCESS = 200,
  NOT_FOUND = 404,
  UNKONW_ERROR = 500,
}
```

Then, different definitions of enums leads to different behaviors and different compiled JavaScript output.

For example, here is an enum definition ([link](https://www.typescriptlang.org/play?#code/KYOwrgtgBAIghgTygbwFBQ1AsgexAE0SgF4oByCPQhMgGnUwBUxgBnak8gFxfcToYYA6sHwg2HUmQDuo8Xxr0AvgG5UqAMZ5WXKNQBcsIqXgIAdLgKIVQA)).

```typescript
enum Day {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
}

const day: Day = Day.Monday;
```

Its corresponding JavaScript compiled output looks like this.

```typescript
var Day;
(function (Day) {
  Day["Monday"] = "monday";
  Day["Tuesday"] = "tuesday";
  Day["Wednesday"] = "wednesday";
})(Day || (Day = {}));

const day = Day.Monday;
```

So we can see in JavaScript, enums are converted to objects, and two-way mappings are added inside the objects, which undoubtedly increases size of the bundle.

As a comparison, we can take a look at the result of using theconst enum definition ([link](https://www.typescriptlang.org/play?#code/MYewdgzgLgBApmArgWxgEQIYE8YG8BQMRMAsuACbYwC8MA5MhdnQDSHEAqicElOtdKN17M2xGAHU45MDz416Ad2myRWVvgC+Abnz5QkWHwBc6KrUxYAdGTB9tQA)).

```typescript
const enum Day {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
}

const day: Day = Day.Monday;
```

When the above code is compiled into JavaScript in strict mode, the constant enum definition is removed and its members are replaced with corresponding inlined values.

```typescript
"use strict";

const day = "monday"; /* Day.Monday */
```

So it’s clear that enums defined by const enum in TypeScript are more likely to be used as values (inferred from the compiled JavaScript results). Whereas enums defined with enum can be used as both values and types.

Last thing to note is that two enums cannot be assigned to each other, even if their members are identical ([link](https://www.typescriptlang.org/play?#code/KYOwrgtgBAIghgTygbwFBQ1AsgexAE0QBp1MAVMYAZ0IRMygHVh8RraSBfAblVVEhQAcsAAeAF3hI0DXAWKkMFdgobNWKuqh58AxniriotAFyxEUALzmEAOjm1uUAPTOoANzgAbAJb4ogLwbgHB7wcF6BkZsEg6IZlL2eLRWwmKSiAnyCE6uUD4gnr7+AYC0eyUlqPoghlBR4so0sSkS8fVJ1iLN6a2I2W4FfoEhQ0A)).

```typescript
enum Day {
  Monday,
  Tuesday,
  Wednesday,
}

enum NextDay {
  Monday,
  Tuesday,
  Wednesday,
}

const day: Day = Day.Monday; // valid 😎

const nextMonday: Day.Monday = NextDay.Monday; // invalid 😭
const nextTuesday: NextDay.Tuesday = NextDay.Tuesday; // valid 😎
```

## Caveats

Using enums as types can lead to some confusing behavior.

Firstly, in the world of [structural typing](https://en.wikipedia.org/wiki/Structural_type_system), enums sticks to [nominal typing](https://en.wikipedia.org/wiki/Nominal_type_system). This means that even if one value is valid and compatible, it can’t be passed to a function or object that requires a string enum ([link](https://www.typescriptlang.org/play?#code/KYOwrgtgBAIglgJ2AYwC5wPYigbwFBRQCqADlALxQDkYJVANAbBgO7aVUAmrIDTAMsABmqCtQA2w1H0IAlOAHMAFqI4JFKvgF88eTinEBDJFCFgQaTNnEYF8JJawAKTohTosALlhvHIAJTeAG4YcJwA3Lo2dr4eIE40dP7hUAD0qVBwIEGG4mFQgHwbgCi7xaUl5VG29u5WTtV+AHSkyWkZOXmcQA)).

```typescript
enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

declare function logDirection(direction: Direction): void;

logDirection("up"); // invalid 🤔

logDirection(Direction.Up); // valid
```

What if we replace it with a JavaScript constant object ([link](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAIgSwE4FNhQeGBeGBvAKBhgFUAHALhgHIBXM6gGiPhAHcwrqATdsJlgBkUAMyhcANqKgDiAJQQBzABbiaSJaoEBfGAEMIMUJCgBuAgSgBPMihgA1PRNooA8iIA8AFQB8OGF4A2gDWKFYgIgEAuuYE3GgSeqgwIrRg6JhgMBIgioioGeAAFNzIaBjgVI7Obp7WthHwZYVgPgCUVABuIAjcsTl5zRVgRXQMbaYwAPRTMJ1OvTCAvBuAIHur62ubFgP55ZlFuy0AdOQT07PzEr1AAA))?

```typescript
const Direction = {
  Up: "up",
  Down: "down",
  Left: "left",
  Right: "right",
} as const;

type ValueOf<T> = T[keyof T];

declare function logDirection(direction: ValueOf<typeof Direction>): void;

logDirection("up"); // valid 😄

logDirection(Direction.Up); // valid
```

If the value of one enum member is a numeric literal, then the type of that enum will be widen to number ([link](https://www.typescriptlang.org/play?ssl=11&ssc=36&pln=1&pc=1#code/KYOwrgtgBAygogJQGoEkDCcD6MAqBBHAVRigG8AoKWQtDGEgXigCYAGVgGkqgDkB5HJgBifQjwAiUJgBZW0rlTEBpPjwDqmRAj4IpUAKzsuAXwDc5cgGMA9iADOAFygBzYA7TWAJsD0AKG94AXLCIqBjY+EQwAJRSAHxQAcDm5K7uXsC+bKzRplAA9PlQAG4AhgA2AJaeFmke3r4AjMwAzLkFRWVVnlCAvBuATHsDQ4MjQA)).

```typescript
enum SERVICE_STATUS {
  SUCCESS = 200,
  NOT_FOUND = 404,
  UNKONW_ERROR = 500,
}

const getCode = (code: SERVICE_STATUS) => code;

getCode(200); // valid

getCode(123); // valid 😲
```

What if we replace it with a JavaScript constant object ([link](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAygUQEoDUCSBhBB9OAVAQTwFU4YBeGAbwCgZ75iMs44AuGAJgAZuAaOgwByAeTzYAYiOJCAIhwAs3BQIYwZAaRFCA6tmRIRSDgFZefGDQC+MAIYQYoSFADcNGlACeABwCmMFFsAGwBXXxEAMwAePAA+Chg8AG0Aa19PEAjEgF0XSxonaBgAc18oDBAAE39KAApQao5A0PDorz9M+GR0LFxCEjhYgEoKeIbfN1Lyqt9anm4hvIB6JZgAN2CAS0r3KYrq2oBGTgBmRZgVmE2wDaDtmEBeDcAQPefXl-egA))?

```typescript
const SERVICE_STATUS = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  UNKONW_ERROR: 500,
} as const;

type ValueOf<T> = T[keyof T];

const getCode = (code: ValueOf<typeof SERVICE_STATUS>) => code;
getCode(200); // valid

getCode(123); // invalid 😄
```

Heterogeneous enums (enum whose member types are different) can lead to weird behavior ([link](https://www.typescriptlang.org/play?#code/KYOwrgtgBAIglgJ2AYwC5wPYigbwFBRQCqADgDQGwYDuIFhAMsAGar1QBKcA5gBapQAvFADkCHvxEUAvgG48eZFgDOAgDYZu8JGkzZhACgAmiFOiwAuWKd1YAlEIB8UEzvMh5eDVpvuD2sz0AOlI7WSgAegioADcAQzU4Iy9NANsQf19grj5UMMjo+MTk7zS-MQlUEXyoqDgQIqSoQF4NwDo9to72rpSfNz0DAEYABiGawoSm5sBGPenZmfmgA)).

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right = "right",
}

const logDirection = (direction: Direction) => direction;

logDirection(Direction.Up); // valid
logDirection(Direction.Right); // valid
logDirection("right"); // invalid 😮
logDirection(100); // valid 😱
```

What if we replace it with a JavaScript constant object ([link](https://www.typescriptlang.org/play?#code/MYewdgzgLgBAIgSwE4FNhQeGBeGBvAKBhgFUAHALhgAYAaI+EAdzCoEZ7iAZFAMyioAmTjABKCAOYALATADkSSTLn0AvjACGEGKEhQA3AQJQAnmRQwAahoA2AVxQB5XgB4AKgD4cMNwG0A1igmILw+ALr6MEa60DA2IBKIqOiYYN4AFAAmyGgY4FTW9k6upuYh8Dkp4B4AlDhe2cl5YIYE8YmVzelJuakAdOQ1kQD0wzAAbrYImW0JPVVg3Z394tJQQzCjE1Mz7fNdCkpQchtbkzbTVAC2KCiwKAAe5ugazdqAvBuAcHtfP99-sx0mql0mxqNRTmMEGBzpcYDc7jBHs8oK9Uh9AIx770x2KxWKAA))?

```typescript
const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: "right",
} as const;

type ValueOf<T> = T[keyof T];

const logDirection = (direction: ValueOf<typeof Direction>) => direction;

logDirection(Direction.Up); // valid
logDirection(Direction.Right); // valid
logDirection("right"); // valid 😎
logDirection(100); // invalid 😱
```

Then, enums used in TypeScript can’t be [tree shaked](https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd) when compiled into JavaScript, because it’s [compiled into IIFE](https://stackoverflow.com/questions/68720866/why-does-webpack-5-include-my-unused-typescript-enum-exports-even-when-tree-sha).

To be clear, enums can be used to define some constants with names. But if the constants are required to be objects (e.g. complex configuration items), enums are obviously not sufficient to handle them ([link](https://www.typescriptlang.org/play?ssl=23&ssc=1&pln=1&pc=1#code/PQKgBIScaPF6gjkYmEphMAUAYwPYDsDOAXMAwugDbECGuAllmALxgDeyYLYAggMoEBcjzrAgNYBTAJ68A5JwISANPwEsAbmWIBXYbwCM8gQF9drACIBRLryaLWI8WAmmuchYpXrNYAEyGWB5HrBk2GAYOLgA3MjIoGCAWdqAknKA3j6A0eqIKLiiAA7CYABqqhoA8gBmADwAKgB8dGBlANo26EU1ALoRUeCAOvKAXHKAsomAdv6AnhmA-vKAFK6pyOlZhCTkVDT0eW7FJZPCjdOkFNSYFW0heMEzW1gFGXM4vESb57XN1QUARgBWwqi4AHSuGtgAFFez2wAlG1ot1ABt5gBLowA8CqNxqsNgCsIsNNUfsjhMtVut-scdoDahIvsIJK1Ivt8Kg1AAnKnCTC4dGXI7ndHVHHnd7ST75YRhIA)).

```typescript
/* sorting rules */
const Collation = {
  ASC: {
    key: "ASC",
    value: 1,
  },
  DESC: {
    key: "DESC",
    value: 2,
  },
} as const;

/* define types */
type ValueOf<T> = T[keyof T];

/* use it as configurations */
type Collation = ValueOf<typeof Collation>;

const collationOptions: Collation[] = Object.values(Collation);

/* use it as default values */
type CollationValue = ValueOf<typeof Collation>["value"];

const currentValue: CollationValue = Collation.ASC.value;
```

## Takeaways

TypeScript has many advantages over JavaScript:

1. Interface-oriented development brings great extensibility.
2. Static type checking can help developers write more robust code, significantly improving code quality and comprehensibility. Types are one of the best forms of documentation.
3. Code integrity and intelligent awareness, which can be one of the biggest advantages.

TypeScript enums can clearly define simple configuration, its existence is reasonable, but not necessarily the most appropriate. The overall optimal solution is not always also the local optimal solution.

Based on the above analysis, we also see many defects (or designed features) of TypeScript enums, even when the source code is not compiled into JavaScript. In practice, then, it is possible to choose the best - using constant objects instead of enums when necessary. What we propose can make it possible to:

- Making types more rigorous and reliable.
- Allowing complex configuration items to complete the loop in daily use.
