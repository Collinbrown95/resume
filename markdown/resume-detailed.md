Collin Brown
============

| ![github](../img/github.png ) | [github.com](https://github.com/collinbrown95) | ![linkedin](../img/linkedin.png) | [linkedin.com](https://ca.linkedin.com/in/collin-brown-499a4580) |
| ---------------------------- | ---------------------------------------------- | -------------------------------- | ------------------------------------------------ |

----

> I do DevOps and Kubernetes platform development for a Data Science
> team in a large organization. I am passionate about bringing data-driven
> projects into production in an enterprise setting using modern open source tools.

----

Experience
----------

### Lead Software Developer · (Jun 2022 - Present)

**Statistics Canada · Data Science Division**

In this position, I have two primary responsibilities: (1) Kubernetes platform development for our organization's analytics environment (the [Advanced Analytics Workspace](https://statcan.github.io/daaas/en/)) and (2) providing the required expertise to bring Data Science projects into production. I elaborate on each area of responsibility below.

> **Kubernetes Platform Development**

**S3 object storage for platform users**

> TODO

**Cloud Environment network connectivity for employees**

> TODO


**Add specialized node pools to the kubernetes cluster**

* Wrote Terraform configuration to add specialized node pools to our Kubernetes cluster such as Azure's [Fsv2-series](https://docs.microsoft.com/en-us/azure/virtual-machines/fsv2-series) VMs for CPU intensive workloads and [NCv3-series](https://docs.microsoft.com/en-us/azure/virtual-machines/ncv3-series) VMs for data science workloads that require multiple GPUs.
* Wrote logic in a mutating webhook to dynamically configure pod tolerations so that specific users have their pods scheduled to the correct specialized node pool.

> **Putting Data Science Projects into Production**

**PDF Document Information Extraction Tool**

* Wrote helm chart for a Data Science application that uses machine learning to extract specific information from unstructured PDF documents.

### Senior Software Developer · (May 2021 - Jun 2022)  

**Statistics Canada · Data Science Division**

In this position, I was acting as the senior software developer on an 18-month cloud-native redesign of the data processing system for a large statistical program Statistics Canada. From May 2021 to July 2021, I worked directly under the project technical lead, and from August 2021 to March 31 , 2022 I acted as the technical lead for the project. The project was completed successfully (on-time and on-budget) on March 31, 2022. Listed below are my primary duties in this position

> **Supervise the work of other developers**

- Supervised the work of 6 different developers (not all at the same time), where each developer focused on implementing a different aspect of the system.
- Provided technical advisory for the project's developers on issues related to software design, code implementation, debugging, testing, and documentation.
- Chaired daily stand-up meetings with the developers, the projects’ clients, and subject matter experts to ensure that the project's deliverables were on track.
- Managed bi-weekly project milestones and project Gitlab issues, ensuring that project goals were met according to specifications in a timely manner.

> **Design and implement several cloud-native components of the system redesign**

- Designed and Implemented a Helm Chart, which specified the deployment of the system including components such as Argo Workflows, a custom web application service, MinIO (running in Gateway mode to Azure blob storage), Elasticsearch, and Kibana.
- Wrote infrastructure as code using Terraform modules to provision cloud resources through the Azure provider, such as Azure Storage Accounts and Storage Containers.
- Designed and Implemented a Gitlab CI/CD pipeline that builds the project’s main Docker image, performs a security scan for known CVEs, runs our automated test suite, builds and publishes the project’s documentation site, and pushes the Docker image to a private image registry.
- Designed the release management strategy for our project that synchronizes source code and infrastructure changes with our deployment environments so that development, test, and production environments can be updated independently. 

### Software Developer · (Oct 2020 - May 2021)

**Statistics Canada · Data Science Division**

TODO

### Data Scientist / Software Developer

**Employment and Social Development Canada** · **Data Science Division** · Aug 2018 - Oct 2020

TODO

Skills, Tools, and Technology
-----------------------------

DevOps
:   Kubernetes Development · Packacing Kubernetes Applications (e.g. Helm, Kustomize, Jsonnet) · Writing Custom Kubernetes Controllers (Golang)

CI/CD
:   ArgoCD · Gitlab CI · Github Actions · Bash Scripting

GitOps and Cloud
:   Terraform · Azure · S3 Object Storage · Azure Blob Storage · Istio · Managed Databases  

Web
:  Python · JavaScript · React · Vue · d3.js · Flask · FastAPI · ORM (e.g. SQLAlchemy) · SQL Databases (e.g. SQLite, Postgres) · Document Oriented Databases (e.g. Elasticsearch)

Docs
:   Static site generators (e.g. mkdocs) · Writing Software Documentation · Implementing Coding and Docstring Standards in Projects (e.g. Google Python Style Guide)

Data Processing
:   Pandas · Numpy · Implementing Scalable Data Processing Jobs on Kubernetes with Argo Workflows · Schema Management and Data Validation (e.g. Pandera, Pydantic)

Data Science
:   Text Data Analysis (e.g. spaCy) · Web Scraping (Scrapy, Beautiful Soup) · Deep Learning Frameworks (e.g. Tensorflow, Pytorch) · Deep Learning Theory (e.g. sequence models, convolutional neural networks)

Economics and Stats
:   Stata · MATLAB · R · Econometric Modeling (Regression Analysis, Panel Data Methods) · Time Series Econometrics · Empirical Microeconomics · Research Design · Experimental Economics

General
:   Public Speaking · Leadership · Consulting · Communication · Academic and Non-Academic Writing · Presentations

Languages
:   English (fluent) · French (beginner-intermediate)

Open Source Software Contributions
----------------------------------

Doccano
: [Doccano](https://github.com/doccano/doccano) is an open source text annotation tool to facilitate data labeling for machine learning projects. On this project, I implemented internationalization on user interface, miscellaneous small feature requests, and bug fixes.


Research Publications
---------------------

Economics
: **January 2022**: [What Drives Bitcoin Fees? Using Segwit to Assess Bitcoin's Long-run Sustainability](https://www.risk.net/journal-of-financial-market-infrastructures/7914886/what-drives-bitcoin-fees-using-segwit-to-assess-bitcoins-long-run-sustainability) · Published in the Journal of Financial Market Infrastructures


Education
---------
### Undergraduate Courses, Computer Science (part-time)

**Athabasca University · 4.00/4.00 cGPA**

Taking the core courses in the undergraduate Computer Science curriculum to supplement my existing education and experience.

**Completed / In Progress Courses**: Object Oriented Programming · Data Structures and Algorithms · Operating Systems · Design and Analysis of Algorithms · Computer Networks

**Remaining Courses (Expected)**: Computer and Network Security · Database Management Systems · Distributed Systems


### Master's Degree, Economics

**Queen's University · 4.17/4.30 cGPA**

**Courses**: Microeconomic Theory, Macroeconomic Theory, Quantitative Methods (Econometrics), Industrial Organization I, Empirical Microeconomics, Time Series Econometrics, Public Economics

**Thesis**: [What Drives Bitcoin Fees? Using Segwit to Assess Bitcoin's Long-run](https://www.econ.queensu.ca/research/working-papers/1423)

**Scholarships and Awards**: Canada Graduate Scholarship · Tri-Agency Recipient Recognition Award

### Bachelor's Degree (Honours), Economics (Minor in Mathematics and Statistics)

**McMaster University · 3.96/4.00 cGPA**

**Courses**: Advanced Economic Theory I & II · Advanced Econometrics · Statistical Methods and Applications · Game Theory · Mathematical Economics · Calculus I–III · Linear Algebra · Directed Research in Econometrics I & II

**Thesis**: Using Dynamic Probability Models to Estimate the Effect that Historical Tax Credit Claims Have on Current Period Claims

**Scholarships and Awards**: Maclean Family Academic Grant · Thompson Academic Grant · Chancellor's Gold Medal Finalist · Hugh Clark Scholarship · Kneale Brothers' 37 Academic Grant · Provost's Honour Roll Medal (Third Year) · Undergraduate Student Research Award · McMaster Spectrum Competition (First Place in Social Innovation Category) · Dr. Lyman Hooker Scholarship · McMaster Entrance Scholarship · University Senate Scholarship
