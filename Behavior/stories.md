# Interview::Behavior::Story

## 自我介绍 (v3)

- 按照个人背景，项目经验，专业技能三方面分点阐述
- 控制在 40 秒左右，根据面试官的提问深入阐述

%

My name is Lai Si you can call me Kevin if you like. I'm a Front End Engineer passionate about web development. I enjoy the process of transforming design concepts into beautiful and intuitive user interfaces. My work keeps me inspired, and I always look for ways to learn and keep up with the latest trends and technologies in web development.

With over 9 years of experience in this field, I have involved in developing dozens of successful projects. Through this journey, I have gained invaluable knowledge and expertise in creating cutting-edge applications using morden web development technologies such as Javascript, TypeScript, HTML, CSS and various open-source libraries like React, Redux, Webpack, etc.

In addition to my engineering skills, I'm also responsible for mentor intern and junior developer for our front-end team. I take great pride in providing valuable guidance and support to our team members.

[optional]
Based on my research, I believe that this position fits my skill sets very well(js/ts, react, redux, webpack...), it will provide me a chance to work with cutting-edge technologies as well as learn from the other talented professionals. I will be excited to be able to bring my skills and passion to contribute to your growth and success.

## Project Introduction 01: Numerix OneView (v1)

- Please briefly introduce your recent project.
- What technologies did you use?
- Which modules are you mainly responsible for?
- What is the difficulty in the project? What is the most challenging part?

%

For the past few years, I've worked on Numerix OneView. It is a risk management and trading platform designed for financial institutions such as banks, hedge funds, and asset managers. It helps these firms manage risk and optimize trading strategies across a wide range of asset classes such as derivatives, fixed income instruments.

Our team responsible for architecture and development of the front-end. We used Javascript/TypeScript, React and Redux to develop and optimize GUI components.
Apart from development, I am also responsible for mentoring interns and junior developers for out team.

performance optimization + monitoring system + 前端工程化 (?)

## Project Introduction 02: Numerix (v1)

Numerix XVA: performance optimization （jsf performance optimization）


## Project Introduction 01: Numerix OneView (v1)

Numerix ESG: learning curve of React and Redux as switch from JSF (jsf to react transition)

## Project Introduction 01: Numerix OneView (v1)

Support protal/download page rebuild: new field, how you learn Salesforce DX toolkit and Lightning framework (leanring salesforce)

## 1-0 How we identified the protential performance issue and optimizing ui performance(React). (v2)

%

Cutting through Ambiguity / Decision making / Prioritization

you perform a thorough analysis - using your subject matter expertise. The highlight will be on **your ability to dive deep into concepts (and to explain them).** Keywords to keep in mind here: **metrics, data driven decision making, gut feeling.**

---

For the past few years we have worked on numerix oneview. For our team, the most challenging part of the project is maintaining its performance as it gets more complex.

The project uses a variety of technologies, including Javascript, TypeScript, React, and Redux. To prevent performance issues from happening, we use a few techniques.

There are three main parts:

- identify the bottleneck
  - chrome/react dev tools, to measure the rendering time of each component
- performance optimization
  - reduce unnecessary render
  - push content down
  - pull content up (example: use 'children' prop)
  - memoization: use with caution, it has extra cost and add up
  - lazy loading: suspense api
  - urgent first: transaction api
  - [React Performance](../../../Tech%20Stack/React%20Performance/performance.md)
- tracking/monitoring
  - front-end monitoring system
  - details of the system
    - what to track
    - how to track
    - how to analyze
    - how to report

Despite the challenges we face, we're proud of the efforts we've put in to ensure that the project maintains good performance and user experience.

[#Behavior::Question::CuttingthroughAmbiguity/DecisionMaking/Prioritization]

## 1-1 How we identified the protential performance issue and optimizing ui performance(JSF). (v3)

%

Cutting through Ambiguity / Decision making / Prioritization

you perform a thorough analysis - using your subject matter expertise. The highlight will be on **your ability to dive deep into concepts (and to explain them).** Keywords to keep in mind here: **metrics, data driven decision making, gut feeling.**

---

Few years ago, I was responsible for maintaining and developing the **NumerixXVA** GUI. The architecture of the app was based on **JSF**, a SSR framework build on Java(Servlet API). The server is written in **Java** and used **Spring** and **Hibernate**.

加说一下如何reproduce the issue, 如果不能简单reproduce, 可以强调一下你如何克服困难想 最终办法 reproduce 的
如果问题严重，不能短时间解决，还可能需要 rollback 来争取时间

As the project gets bigger, we starts to experience slow loading speeds and laggy screen on some pages. We decided to dig into the issue before it gets worse.

Using chrome dev tools I'm able to monitor components rendering time (target at 16ms) and identified that the issue was caused by some datatables. Espically when loaded with a large amount of data.

We then started refactoring the code, there are three main techniqies we used to improve the performance:

  1. Use **Ajax**: use Ajax if possible, partially update reduce the number of requests to the server and improve performance.
  2. Use **lazy loading**: load components only when they are needed, this helps reduced at least 50% the initial load time. We provide a setting to config default tabs to be loaded.
  3. Use **pagination** (only for certain datatable): we implemented pagination support for the datatable, it prevents loading thousands of rows all at once. Paginated requests query at only 50/100 rows per call(depends on the setting), this reduced the rendering time of the datatable as well as the burden on the server side.

The page runs much smoother after refactor. Additionally, there has been an average 50% reduction in the first-page loading time.
加上，之前之后的时间对比

[#Behavior::Question::CuttingthroughAmbiguity/DecisionMaking/Prioritization]

## 1-2 How I helped IAS team to build a new product download page. (v3)

%

Cutting through Ambiguity / Decision making / Prioritization

through education. You gain some expertise (for eg. in some niche domain) so you can be successful in your role.

---

Our IAS team was facing a critical issue with our product download page. The current download page was built on Salesforce Aura. The design was obsolete, and the support team had to modify the source code manually, which made the update process excruciatingly slow and sometimes caused the browser to crash. Additionally, the outdated design stored all binary files within Salesforce, which was quite expensive compared to popular cloud storage options like AWS S3. (charging an additional $125/month for 500MB)

As someone who had never worked on the Salesforce platform before, I spent about a month educating myself by studying Salesforce trailheads, attending Salesforce conferences, and discussing with the rest of the IAS team. We evaluated three options to resolve the issue.

1. Refactor based on current code, this is the easiest way, but since it is base on outdated technology, the performance won't be any better.
2. Use third party solution, it is the most expensive way and overkill for our needs.
3. Rebuild the page use Salesforce DX toolkits, LWC and migrate all binary to AWS S3.

I strongly advocated for the third option over the other two. Although it required more time and effort, it proved to be the most cost-effective and future-proof solution, which we ultimately implemented.

The results turned out to be better than expected. The new version is much faster and more stable than the old one. It is capable of automatically generating download links after releases and retains the ability to manually configure the page if needed. It has also saved a significant amount of time for the support team.
After completing the download page, we worked closely with the support team and migrated all the files to AWS S3, which saved us at least $8,000 per month.

[#Behavior::Question::CuttingthroughAmbiguity/DecisionMaking/Prioritization]

## 1-3 How I prioritize the feature (NumerixESG) and catch up with the deadline. (v4)

%

Cutting through Ambiguity / Decision making / Prioritization

---

I have previously worked on a project called NumerixESG (Economic Scenario Generator), and we encountered an obstacle when our sales team requested the project to be finished four weeks before the original deadline.

To meet this new deadline, we had to find a way to prioritize our work effectively while ensuring that we met the project requirements and quality standards. Here are the steps I took to ensure that we caught up with the deadline and completed all the necessary features:

1. We gathered time estimates for all remaining tasks. This gave us a better understanding of the overall time required by the project at its current stage.

2. We worked together with the sales team and used the lean prioritization technique, where we assigned a priority level to each task based on the effort, time estimate, and potential impact. For example, we set lower priority to many non-essential visual elements(animation, charts, themes) and postpone to next release if necessary.

3. We used a mock data service instead of waiting for the backend team to provide the REST API. This helped us save a lot of time during integration and acted as a backup in case the backend service could not be finished on time.

4. We also communicated with stakeholders from other projects and requested delay some of the tasks that were not urgent.

By implementing these measures, we were able to successfully complete the feature development within the given timeline. We were able to launch the product without any major bugs and it was well-received by our client.

[#Behavior::Question::CuttingthroughAmbiguity/DecisionMaking/Prioritization]

## 2-1 How I receive tough feedback during the pandemic from my manager and how I respond. (v3)

%

- Conflict & Influence

---

During the pandemic, I received tough feedback from my manager. He said he was not very satisfied with my performance lately. At first, I was very upset about the comment because I had actually been spending more time on work compared to before.

During the performance review, I asked my manager to provide more details about the feedback and how I could improve. He said the concern was not about the deliverability of my work but about my communication skills. I then realized that I might not have been spending enough time on communication. I had been so focused on the work that sometimes I only updated my manager after several days (which was normal between us before the pandemic). This made him constantly worry about my progress.

After the meeting, in addition to regular meetings, I have been more proactive in reaching out to my manager and updating him on my progress more frequently. I am happy to say that my manager is now satisfied with my change.

[#Behavior::Question::Conflict&Influence]

## 2-2 How I disagree my manager's assignment and help team member to catch up with the project. (v3)

%

- Conflict & Influence

---

When our team started to work on Numerix OneView (javascript react project). We have 4 developers in the team. And two of us have experience with react. So other two developers are assigned to work on lagecy project and doning support and maintenance work only. They both express their interest to learn react and wanted to work on the new project, but our manager seemed reluctant to change the assignment.

After discussing the matter with my manager, I understood that his main concern was completing the project on time. He felt that the two developers can catch up later after the release, without affecting the deadline. However, I thought that as the project progressed, it would become more and more complex, making it harder for them to catch up, requiring even more of my time to help them.

To address this issue, I created a detailed plan, including the amount of time we needed to spend each day and the skills they had to learn before contributing to the project. We guaranteed that this would not affect our productivity.

Our manager agreed to my plan, and although I had to spend an extra one to two hours initially to help them, I was happy that they were able to catch up and start contributing to the project. As a team, we successfully completed the project.

[#Behavior::Question::Conflict&Influence]

## 2-3 (3-2) How I convince my manager to use React to build NumerixESG(instead of JSF)

%

- Conflict & Influence
- Continuous Learning & Innovation

---

same as 3-2

[#Behavior::Question::Conflict&Influence]
[#Behavior::Question::ContinuousLearning&Innovation]

## 2-4 How I convince IAS team to use vscode and salesforce dx toolkit for development. (v3)

%

- Conflict & Influence

I worked on a task to collaborate with the IAS team and rebuild our support portal. However, the IAS team was used to working with a traditional approach to project management and was hesitant to use a new tool that I had proposed.

First, I scheduled a meeting with the team and presented the new tool, highlighting the benefits it would bring to the team's workflow. I explained that the new tool would streamline our workflow and make the development process more organized and efficient. However, the team was still not convinced since they were used to the old way, which worked for them, and were wary of the learning curve involved.

After addressing their concerns, mostly about the learning curve, I offered to create a training plan containing very detailed step-by-step instructions, as well as a list of tutorial videos to help them get started in a few days.

Finally, I asked for their feedback and made adjustments and improvements to the training materials to ensure that new hires can get up to speed quickly.

After adopting the new toolkit, the IAS team noticed the positive effects of the tool for project management and started appreciating its benefits.

[#Behavior::Question::Conflict&Influence]

## 3-1 How I learn new things by challenging myself constantly with tricky requests, use react datatable performance optimize as example

%

- Continuous Learning & Innovation
- I learn new things by challenging myself constantly with tricky requests
- Do not limit yourself to one source of inspiration

---

same as 1-0

[#Behavior::Question::ContinuousLearning&Innovation]
[#Behavior::Question::CuttingthroughAmbiguity/DecisionMaking/Prioritization]

## 3-2 How I learn react and develop prototype project (NumerixESG). (v3)

%

- Continuous Learning & Innovation
- I learn new things by challenging myself constantly with tricky requests
- Do not limit yourself to one source of inspiration

---

I have previously worked on building a project named NumerixESG.

Instead of sticking with JSF, which is currently used in our team, I conducted extensive research on Angular and React. After trying them out on my own and consulting with friends who have experience with both, I concluded that React is a great fit for this project.

I proposed my idea to the team and our manager and explained why I thought React was the way to go. I listed several major challenges that our current JSF project was facing and how React could help us solve those challenges, such as:

  1. The build process is very slow, it takes around 5 minutes to build and deploy the project in dev enviroment.  To make things worse, the hot reload is constantly broken, we have to restart the server if it doesn't work.
  2. The performance is not idea even after we optimize the code.
  3. JSF UI library we used (Primefaces) is not very popular framework, it is hard to find resources online.

And React also brings more benefits such as:

  1. light weight framework and very flexible
  2. over all faster ui experience
  3. trending front-end technology, great documentation and community support

Using React, I was able to build a prototype in a few weeks. The finished project was well received by both our team and the sales team due to the great user experience and easier set-up process. The success of our PoC project convinced our team to switch to React for future projects.

[#Behavior::Question::ContinuousLearning&Innovation]

## 4-1 How I maintain productivity throughout a project development. (automation) (v2)

%

- Vision / Strategic Thinking

---

For the past few years, I have worked on various tasks, including the highly significant project called Numerix OneView, where I was the senior developer involved in the development from start to finish. I take complete responsibility for the project's success.

From a business/non-tech perspective, I worked closely with our FE and sales teams to understand requirements, define achievable goals, and establish timelines. We maintained regular communication throughout the project's duration.

Regarding development, we took a proactive approach to identify and mitigate risks. We noticed that an inconsistent project structure and code standard were harmful to our productivity and the project quality as it grew.

- We used standardized scaffolding. Start from same scaffold reduced a lot of time to set up a new project by save time consuming bioplate config and avoid common mistake. It also redued the learning curve for new hires.

- In the scaffold we included eslint, prettier ensure standard code format and results in less bugs and better overall code quality.

- Lastly, we also use Bitbucket pipeline to set up ci/cd to streamline the development process.

[#Behavior::Question::Vision/StrategicThinking]

## 4-2 How I use s3 replace salesforce as storage and reduce cost for company

%

- Vision / Strategic Thinking

---

Same story from 1-2, here we focus on migrate storage from salesforce to s3 and reduce cost for company.

[#Behavior::Question::Vision/StrategicThinking]

## 5-1 (3-2) How I use react to improve performance and user experience

%

- Results / Outcome Orientation

---

3-2

[#Behavior::Question::Results/OutcomeOrientation]

## 5-2 (1-2) How I help ias rebuild download page and migrate lib to s3 and reduce cost for company

%

- Results / Outcome Orientation

---

1-2

[#Behavior::Question::Results/OutcomeOrientation]

## 6-1 (1-3) How I prioritize tasks and deal with multiple tasks at the same time

%

- Personal Growth

---

1-3

[#Behavior::Question::PersonalGrowth]

## 6-2 Talk about a project you are most passionate about, or one where you did your best work. (v1)

%

- Personal Growth

---

One project I am particularly passionate about was building Numerix OneView. I had the opportunity to apply my knowledge of React, which I had gained through learning.

Throughout the project, I worked closely with the sales and frontend teams to optimize each feature for the best user experience. I leveraged React for its component-based architecture and Redux for state management. This combination helped me to maintain a clear separation of concerns and scale the application as needed.

Furthermore, I utilized Typescript to enhance the application's type safety and reduce potential errors. The added benefit of type checking made the code stronger, and it had great maintainability.

Overall, I am proud of the work I did on this project, as it showcased my ability to leverage cutting-edge technologies to build complex, maintainable, scalable, and user-friendly applications.

[#Behavior::Question::PersonalGrowth]

## 6-3 How do you handle work life balance? (v1)

%

- Personal Growth

---

Maintaining a good work-life balance is important to me as it allows me to recharge and perform better at work. There are several strategies that I employ to maintain this balance:

- Prioritizing - I prioritize my workload and focus on the most important tasks first, set achievable workload for every day work so I can complete within normal working hours and have time for other activities.

- Focus hour - I have highest energy level in the morning, so I do complex tasks in the morning and leave relatively easy tasks for later.

- Regular physical activity - I find regular physical activity, such as exercise improving my overall well-being help recharge myself.

- Hobbies - I also leave time for hobbies during weekend and socializing with friends and family.

[#Behavior::Question::PersonalGrowth]

## 6-4 Tell Me About a Time You Failed (v2)

%

- Personal Growth

---

I worked on a task to build a ui that provides customizable charts, animations, and a variety of themes. My manager plans to demonstrate it during the company's annual kickoff meeting.

During the kickoff week (my manager needs to attend for an entire week), I feel he is busy attending all kinds of meetings. Therefore, based on my previous experience working with sales team, I assumed that the theme is not very important and decided to leave it to our intern without confirming with my manager.

Two days before the demo, my manager asked for the progress. I reported that I was able to finish most of the features, except the themes are still at an early stage. They currently support only two colors and do not allow any customization (which is as planned, as we will refactor it later). My manager was surprised and asked if we could finish the customization feature as soon as possible because it is an important feature they want to showcase during the demo.

I worked overnight and still wasn't able to provide full customization. My manager wasn't happy about it, and he had to do the demo with the limited feature. I learned that as a developer, you should never assume; you should always communicate and make sure you understand the requirements of your stakeholders.

[#Behavior::Question::PersonalGrowth]
