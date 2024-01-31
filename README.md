# Automation API Testing Demo Project

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)

## Overview

This project serves as a demonstration of API testing using Playwright and TypeScript. It focuses on automating the testing of the [https://restful-booker.herokuapp.com/](https://restful-booker.herokuapp.com/) API. The goal is to showcase best practices and provide a practical example for recruiters and developers interested in understanding API testing with Playwright.


## Project Structure

The project follows a standard directory structure for a Playwright and TypeScript project

├── src
| ├──support
│ │ ├── helpers.ts
│ │ │ └── ...
│ ├── tests
│ │ ├── api
│ │ │ ├── apiTest.spec.ts
│ │ │ └── ...
│ └── ...
├── playwright.config.ts
├── package.json
└── ...