# SonarQube + GitHub Actions Quality Pipeline Demo

## Project Overview

This project demonstrates how to build a lightweight Quality Engineering pipeline using:

* GitHub Actions
* SonarQube Cloud
* Jest tests
* Code Coverage reporting
* Automated Quality Gates
* Continuous Integration workflow

The goal of this project was to simulate a real QA/CI process where every code change is automatically validated before delivery.

---

# Architecture Overview

```text
Developer Push
      │
      ▼
GitHub Actions CI Pipeline
      │
      ├── Install dependencies
      │
      ├── Run Jest tests
      │
      ├── Generate coverage report
      │
      └── SonarQube Scan
                │
                ├── Static Code Analysis
                ├── Coverage Validation
                ├── Code Smell Detection
                ├── Security Analysis
                └── Quality Gate
                          │
                          ▼
                    PASSED ✅
```

---

# Technologies Used

| Technology      | Purpose              |
| --------------- | -------------------- |
| JavaScript      | Application logic    |
| Jest            | Unit testing         |
| GitHub Actions  | CI/CD automation     |
| SonarQube Cloud | Static code analysis |
| Node.js         | Runtime environment  |

---

# CI/CD Workflow

The workflow automatically starts after every push to the repository.

## Pipeline Steps

### 1. Checkout Repository

The pipeline downloads the latest repository version.

### 2. Setup Node.js

Installs the required Node.js environment.

### 3. Install Dependencies

Runs:

```bash
npm install
```

### 4. Run Automated Tests

Executes Jest test suite.

```bash
npm test -- --coverage
```

### 5. Generate Coverage Report

Jest creates:

```text
coverage/lcov.info
```

### 6. Run SonarQube Analysis

SonarQube performs:

* Static analysis
* Coverage validation
* Code quality checks
* Duplication analysis
* Security hotspot detection

---

# SonarQube Configuration

## sonar-project.properties

```properties
sonar.projectKey=ValeriaSpektor_sonarqube-js-quality-demo
sonar.organization=valeriaspektor

sonar.sources=src
sonar.tests=tests

sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.sourceEncoding=UTF-8
```

---

# GitHub Actions Workflow

## sonar.yml

```yaml
name: SonarQube Analysis

on:
  push:
    branches:
      - main

jobs:
  sonarcloud:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run tests with coverage
        run: npm test -- --coverage

      - name: SonarQube Scan
        uses: SonarSource/sonarqube-scan-action@v7
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

---

# Final Quality Results

| Metric            | Result   |
| ----------------- | -------- |
| Quality Gate      | PASSED ✅ |
| Coverage          | 100%     |
| Bugs              | 0        |
| Vulnerabilities   | 0        |
| Security Hotspots | 0        |
| Duplications      | 0.0%     |
| Code Smells       | 0        |

---

# Quality Metrics Visualization

```text
Coverage           ████████████████████ 100%
Bugs               ████████████████████ 0
Vulnerabilities    ████████████████████ 0
Duplications       ████████████████████ 0%
Security Hotspots  ████████████████████ 0
```

---

# Issues Encountered During Setup

During the integration process several CI/CD and SonarQube configuration issues were identified and resolved.

## Problems Found

### 1. Missing SONAR_TOKEN

The workflow initially failed because GitHub Secrets were not configured.

### 2. Invalid Organization Key

SonarQube could not identify the organization due to incorrect configuration.

### 3. Conflict Between Automatic Analysis and CI Analysis

SonarQube Automatic Analysis had to be disabled to allow GitHub Actions scanning.

### 4. Incorrect Project Configuration

The `sonar-project.properties` file initially contained placeholder values.

---

# QA Engineering Conclusions

This project demonstrates several important Quality Engineering principles:

## 1. Shift-Left Testing

Quality validation starts immediately after code push.

## 2. Automated Quality Control

Static analysis and testing are fully automated.

## 3. Continuous Feedback

Developers receive immediate feedback after every commit.

## 4. Risk Reduction

Automated quality gates reduce the probability of unstable releases.

## 5. Visibility of Software Quality

Code quality becomes measurable and transparent.

---

# Key QA Skills Demonstrated

* CI/CD pipeline configuration
* GitHub Actions integration
* SonarQube Cloud integration
* Static code analysis
* Quality Gate management
* Coverage analysis
* Debugging pipeline failures
* Root cause investigation
* Automation-oriented QA thinking

---

# Possible Future Improvements

* Pull Request analysis
* Branch protection rules
* Automatic merge blocking on failed Quality Gate
* ESLint integration
* Security scanning extensions
* Performance testing integration
* Test reporting dashboards

---

# Repository Purpose

This repository was created as a practical demonstration of modern QA engineering practices and CI/CD quality automation.

It can be used as:

* QA portfolio project
* CI/CD learning example
* SonarQube integration example
* Static analysis demo project
* GitHub Actions training project

---

# Author

Valeria Spektor

Senior QA
