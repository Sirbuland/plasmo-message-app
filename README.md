This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

# Task 1: System Architecture Design with Specific Technologies

**Answer:**

<img width="832" alt="image" src="https://github.com/Sirbuland/plasmo-message-app/assets/23502541/c33a2cce-adfa-4e84-8903-693e004f08c8">

**User Interface:**

The system involves a web application (A[Web Application]) through which users interact with your platform.

**Chrome Extension and Plasmo Framework:**

The Chrome Extension is built using the Plasmo Framework.

The extension comprises a Background Script and a Content Script.

**Machine Learning Components:**

Machine Learning functionalities are divided into ML Models and an AI Model Service.

The ML Models are involved in generating messages based on fine-tuned models using client conversation history.

The AI Model Service handles model inference and communicates with the server/API.

**Cloud Services:**

Cloud services include a Server/API responsible for coordinating communication between different components, handling user requests, and managing data.

The system utilizes a Database for storing relevant data, possibly including client conversational message history.

**User Interaction Flow:**

Users interact with the web application, triggering actions that are communicated to the Chrome Extension.

The Chrome Extension communicates with Cloud Services for data storage and with Machine Learning components for message generation.

**Message Generation Process:**

The background script in the Chrome Extension manages background tasks, including triggering the message generation process.

Message generation involves communication with ML Models and AI Model Service.

**Content Script and Data Extraction:**

The content script is responsible for interacting with web page content and extracting relevant data.

Extracted data is used in the message generation process.

**Communication Channels:**

Communication between components is facilitated through API requests over HTTPS, ensuring seamless interaction.

This architecture aims to automate message sending to customers based on machine learning models that are fine-tuned using client conversational history. The Chrome extension acts as a bridge between the web application, cloud services, and machine learning components, orchestrating the overall functionality of the system.

# Task 3: Advanced Authentication and Authorization System

**Answer:**

<img width="132" alt="image" src="https://github.com/Sirbuland/plasmo-message-app/assets/23502541/a88fa489-992a-4349-bce6-a31846574bfd">

IAuthentication and user management There are five essential points mentioned, which I have explained one by one below.

- Authentication & Authorization
- Multiple user management.
- Data visibility and security measures

### Authentication & Authorization:

To set up authentication, first, we need to categorize users into different types, like organization admins, regular users, and roles with specific needs. Once we've got these user types sorted, the next step is to register users of each type by collecting the necessary information for their respective roles.

After getting users registered, it's crucial to add security. We can do this by implementing standard authentication methods such as OAuth or JWT. These methods ensure a safe and secure authentication process for users when they log in or sign up.

In the realm of authorization, we can focus on the following aspects:

1. RBAC (Role-based access control)
  1. Employing RBAC involves assigning specific roles to users, such as organization admin or regular user.
2. Permissions
  1. We'll define detailed permissions associated with each role, tailoring access to specific actions. For instance, organization admins might handle user management, while staff users might be limited to reading user information
3. Hierarchical Roles.
  1. We can define hierarchical roles to represent different levels of authority

## Multiple user management.

For Multiple-user management, we can build a global account structure that allows numerous organizations within a system. Each organization will have organization administrators who will have control over user management within the organization. To enable this, I will design data isolation so that people may only access and manage data within their organization.

## Data Visibility & Security Measures:

We can define data visibility rules based on user roles. For instance, organisation admins may have visibility into all data within their organisation, while regular users may only see their data. To ensure transparency into who accessed what data and when we can Implement audit trails to track user actions

For security measures, we can enable the following points

1. Ensure that API endpoints are secure and validate user permissions before serving requests.
2. Implement secure session management to protect against unauthorised access.

By carefully implementing these elements, the authentication and authorization system will provide a robust framework for managing users, roles, permissions, and data visibility in a scalable and secure manner.

# Task 4: Security, Scalability, and Resilience

**Answer:**

## Security:

1. Implement strict CSP headers to mitigate the risk of Cross-Site Scripting (XSS) attacks.
2. Utilize the isolation capabilities of the Plasmo framework to ensure that components are sandboxed and do not have unintended access to each other's data or functionality.
3. Only request and use the permissions necessary for the extension's intended functionality.
4. Regularly update the extension to patch security vulnerabilities and ensure that users are using the latest, most secure version.

### Security for Web Application:

1. Implement robust input validation and sanitization to prevent common web vulnerabilities, such as SQL injection and Cross-Site Scripting (XSS).
2. Enforce strong password policies, use secure password hashing algorithms, and implement multi-factor authentication (MFA) for enhanced security.
3. Employ secure session management practices, including session timeouts, secure session storage, and secure session token handling.
4. Utilize CSP headers to mitigate the risks associated with loading external scripts and resources.

### Challenges Posed by Plasmo Framework and Multi-User Environments:

#### Plasmo Framework:

The Plasmo framework may pose challenges related to sandboxing components. Carefully configure and test sandboxing mechanisms to ensure proper isolation.

Address potential issues related to data sharing between components. Implement secure communication channels and validate data exchanges.

#### Multi-User Environments:

1. Ensure strict isolation of user data to prevent one user from accessing another user's data.
2. Enforce role-based security measures to control access to features and data based on user roles.

## Scalability and Performance:

1. Implement effective caching strategies to reduce the load on servers.
2. Use load-balancing techniques to distribute incoming traffic across multiple servers
3. Implement asynchronous processing for tasks that do not require immediate user feedback.
4. Utilize CDN services to distribute static assets closer to users, reducing latency and improving content delivery speed.

#### Error Tracking and Performance Monitoring

Implement robust performance monitoring tools to identify and address bottlenecks in real-time, ensuring a smooth user experience. Also add sentry to track any system errors

# Task 5: User Event Analytics

**Answer:**

Tools and Technologies for Collecting, Storing, and Analyzing User Event Data:

## Event Data Collection:

### Google Analytics:

Google Analytics is a widely used tool for web analytics. It provides detailed insights into user behavior, user demographics, and acquisition channels. It can be easily integrated into web applications and Chrome extensions.

### Plasmo Analytics Module:

Leverage the analytics module provided by the Plasmo framework to capture specific events within the Chrome extension. This ensures compatibility with the existing architecture.

# Task 6: Technology Selection and Justification

**Answer:**

Tech Stack

1. React + Plasmo Framework
2. Mongo DB for No SQL Data
3. Express(Node)
4. Typescript
5. Docker + Docker compose
6. AWS (EC2) for Cloud Service
7. AWS S3 for frontend deployment
8. AWS Cognito for authentication.
9. Google Analytics + Plasmo Analytics for web application
10. Sentry

### React + TypeScript + Plasmo Framework

React.js provides a responsive and modular frontend, enhancing the user experience. Node.js enables the development of a scalable and non-blocking backend, facilitating concurrent handling of requests.

Plasmo framework provides a secure and modular environment for Chrome extension development, aligning with the extension's specific requirements.

### Mongo DB for No SQL Data:

MongoDB offers seamless scalability, ensuring optimal performance as the user base grows. MongoDB can store any type of file which can be any size without affecting our stack

### Express(Node):

Express.js is a lightweight and flexible Node.js framework, suitable for building RESTful APIs and handling backend logic efficiently. it simplifies development with its intuitive design and robust middleware support. Known for its efficiency, extensibility, and strong community, Express enables the creation of scalable APIs and web applications. Its versatility, seamless integration with frontend frameworks, and active development make it a go-to choice, offering a powerful foundation for building modern and performant server-side applications.

### Typescript:

TypeScript enhances JavaScript development by introducing static typing, providing early error detection, and improving code quality. With clear type definitions, it fosters better collaboration among developers, making code more maintainable. TypeScript's configuration options and future-proofing enable us to write safer, more maintainable, and scalable code.

### Docker + Docker compose:

Docker allows the encapsulation of applications and dependencies into containers, ensuring consistency across different environments and enhancing scalability.

### AWS (EC2) for Cloud Service:

Amazon EC2 stands out as a compelling choice for cloud services due to its unparalleled scalability, offering on-demand resources tailored to diverse application needs. With a global presence, security features, seamless integration with other AWS services, and a pay-as-you-go pricing model, EC2 empowers businesses with flexibility, control, and cost-effectiveness.

### AWS S3 for frontend deployment:

With its cost-effective storage options, easy configuration, and automatic scaling, AWS S3 emerges as an ideal choice, simplifying the deployment and delivery of frontend applications while ensuring reliability and performance.

### AWS Cognito for authentication:

Amazon Cognito offers a fully managed service for user authentication, simplifying the implementation of secure and scalable user management.

### Analytics:

Google Analytics and Plasmo Analytics Module cater to web application and Chrome extension analytics, respectively, providing insights into user behavior.

By integrating these technologies, the system can meet the requirements of user management, security, scalability, and performance effectively.

### Sentry:

1. It provides error tracking
2. Real-time error notifications
3. Replays for errors generated.
4. Release Monitoring
