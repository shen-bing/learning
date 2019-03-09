# Chaper 02. Developing your first Spring Boot application

## 2.1 Putting Spring Boot to work

    Throughout this book, we’re going to build a simple reading-list
    application.

    Spring MVC
    Spring Data JPA
    H2 Database

### 2.1.1 Examining a newly initialized Spring Boot project

### 2.1.2 Dissecting a Spring Boot project build

    mvn -o spring-boot:run

## 2.2 Using starter dependencies

### 2.2.1 Specifying facet-based dependencies

    mvn -o dependency:tree

### 2.2.2 Overriding starter transitive dependencies

    ```XML
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <exclusions>
            <exclusion>
                <groupId>com.fasterxml.jackson.core</groupId>
            </exclusion>
        </exclusions>
    </dependency>
    ```

## 2.3 Using automatic configuration

### 2.3.1 Focusing on application functionality

    DEFINING THE DOMAIN
    DEFINING THE REPOSITORY INTERFACE
    CREATING THE WEB INTERFACE

### 2.3.2 Running the application

    mvn spring-boot:run
    mvn compile

## 2.4 Summary
