# SpringBoot概述

## 概述

Spring Boot 可以称之为 **新一代 JavaEE 开发标准**；随着动态语言的流行 (Ruby、Groovy、Scala、Node.js)，Java 的开发显得格外的笨重：繁多的配置、低下的开发效率、复杂的部署流程以及第三方技术集成难度大。

在上述环境下，Spring Boot 应运而生。它使用 “**习惯优于配置**” （项目中存在大量的配置，此外还内置了一个习惯性的配置，让你无需手动进行配置）的理念让你的项目快速的运行起来。使用 Spring Boot 很容易创建一个独立运行（运行 Jar，内嵌 Servlet 容器）准生产级别的基于 Spring 框架的项目，使用 Spring Boot 你可以不用或者只需很少的 Spring 配置。

## 主要目标

Spring Boot 让您更简单的创建基于 Spring 的独立的，生产级的可运行 “应用程序”。 对于 Spring 平台和第三方库，我们采取一种 “**强制性**” 的观点，以至于您可以更加轻松的开始使用。 大部分 Spring Boot 应用程序只需要一点点 Spring 的配置即可。

您能够使用 Spring Boot 创建以 `java -jar` 或更传统的 `war` 部署的方式运行的 **Java 应用程序**。我们也提供了可以运行 “spring scripts” 的命令行（CLT）工具。

- 为所有 “Spring 开发” 提供更快速、更便于理解的入门体验。
- Be opinionated out of the box but get out of the way quickly as requirements start to diverge from the defaults.
- 提供一系列的非功能性特性，这些特性是大型项目类所共有的（如： 内嵌 servers, security, metrics, health checks, and externalized configuration）。
- 完全不生成代码， 也不需要配置 XML。