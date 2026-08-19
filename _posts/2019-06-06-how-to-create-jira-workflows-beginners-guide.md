---
title: "How To Create JIRA Workflows - Beginners Guide"
date: 2019-06-06
slug: how-to-create-jira-workflows-beginners-guide
language: en
source: jcfausto.com
original_url: "https://jcfausto.com/2019/06/how-to-create-jira-workflows-beginners-guide/"
archive_url: "https://web.archive.org/web/20190817210049/https://jcfausto.com/2019/06/how-to-create-jira-workflows-beginners-guide/"
recovered: true
redirect_from:
  - /2019/06/how-to-create-jira-workflows-beginners-guide/
---

Creating workflows in JIRA might be a daunting task if you don’t get the foundation right. As a beginner, you need to understand first some basic concepts before implementing your first workflow or adjusting an existing one. I’ll share with you 3 easy steps to create your JIRA workflow.

I’ll explain below these basic concepts and will also provide a step-by-step guide on how to set up a basic workflow in JIRA. Keep in mind that in order to create workflows in JIRA you have to have JIRA administration rights, otherwise you won’t be able to manage workflows. Also, I created this tutorial for JIRA Cloud because it’s the most recent and accessible JIRA version. Most of the ideas presented here are also applicable to hosted versions of JIRA.

The use case I’ll use as a base for this tutorial is that of person who has a project in JIRA with a default JIRA template workflow and wants to replace it with a new one customized to her team’s needs.

## Basic Concepts

The work flows from a series of steps, starting at an initial step and then moving forward, and sometimes backward, step by step until its completion. A step in JIRA is known as a “status”.

### Status

A status in JIRA represents the current situation for a particular issue on a given time. This one is easy to understand. For instance, we can say that a particular issue in “In progress” or “In Review”. Ths situational representation is what we call “Status”.

You can have as many statuses as you want in your workflow, but keep in mind that the less the better.

### Transition

Transitions are the bridges from one status to another. A transition is an action and represents the movement of a particular work from one state to another.

For instance, one might want to “Start working” on a JIRA issue. Once you sign that you want to “Start working” on a JIRA issue, you’ll also execute a transition from the current state to a new one which says that now the issue is “In progress”.

On JIRA cloud, transitions will appear like this:

![](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-transiton-example-on-issue-screen.png?fit=676%2C381&ssl=1)

JIRA Cloud – Transition example on issue screen

On JIRA Server, transitions will be usually represented as buttons at the top menu of the edit issue screen.

### Categories

JIRA has three types of work category:

1. To Do: Work that is waiting to start.
2. In Progress: Work that is being worked.
3. Done: Work that was finished.

No matter which status you create, you’ll have to define to which category the status belongs to is it has to be one of the three listed above.

Each category has its own colour as well. To Do is grey, In progress is blue, and Done is green, as seen in the image below:

![Image showing three different categories, each one with a different colour.](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-categories-highlighted.png?resize=676%2C214&ssl=1)

JIRA Cloud – Issue Catetories

Why this is like this? Well, I don’t exactly what was the reason, but it’s easy to infer that it was done this way to simplify a lot the way they do their reporting calculations. But that’s going off-topic. Let’s get back to the workflow creation topic.

Just as a curiosity, on JIRA Server, the colour representing the “In Progress” category is yellow and not blue as in JIRA Cloud.

## Create Your First Workflow In JIRA

### Step 1: Start With Pen and Paper

Before jumping into implementing the workflow in JIRA, start with pen and paper and do some research in order to understand which workflow you’ll have to create. Ask someone in the team to verbally describe their workflow. Take notes of the words they use and convert that into a list of steps.

[When creating workflows in JIRA, the best way to start is with pen and paper. Talk to people and ask them to verbally describe how they work. Take notes of the words they used and convert that to a draft workflow that you can use to start…](https://twitter.com/intent/tweet?url=https://wp.me/p5CfdI-5O&text=When%20creating%20workflows%20in%20JIRA%2C%20the%20best%20way%20to%20start%20is%20with%20pen%20and%20paper.%20Talk%20to%20people%20and%20ask%20them%20to%20verbally%20describe%20how%20they%20work.%20Take%20notes%20of%20the%20words%20they%20used%20and%20convert%20that%20to%20a%20draft%20workflow%20that%20you%20can%20use%20to%20start%E2%80%A6&via=jcfausto&related=jcfausto)[Click To Tweet](https://twitter.com/intent/tweet?url=https://wp.me/p5CfdI-5O&text=When%20creating%20workflows%20in%20JIRA%2C%20the%20best%20way%20to%20start%20is%20with%20pen%20and%20paper.%20Talk%20to%20people%20and%20ask%20them%20to%20verbally%20describe%20how%20they%20work.%20Take%20notes%20of%20the%20words%20they%20used%20and%20convert%20that%20to%20a%20draft%20workflow%20that%20you%20can%20use%20to%20start%E2%80%A6&via=jcfausto&related=jcfausto)

#### Example of a conversation that you might have

---

**Alice:**Hey Bob, I’d like to design and implement the team’s workflow in JIRA, but first I’d like to understand how the team works. Could you describe to me which steps you usually do from the moment you get something to do to the moment you consider it done?

**Bob:**Sure, well, usually after our planning meeting we have a set of issues we selected from our backlog as the ones we’d like to implement during the week. Then, we assign ourselves to one of the issues we’d like to work and start the development. Once the development is done, I submit the code changes to code review, then I interact with people base on their feedback and fix any issue that might be reported to me. When the code review is done, then I integrate the code. This is the last step where I do the integration of the code into the main branch, wait for the feedback from the tests, check our internal dashboards and then if everything goes well I consider this work done.

**Alice:** Great. I think I got it. Thank you very much for your time.

**Bob:** No worries

---

From the chat above, Alice might come up with the following list of statuses (steps):

- Backlog
- Selected for Development
- In Progress
- In Review
- Integration
- Done

With this list at hand, Alice can then layout the flow between these statuses and define the transitions as well.

Backlog => Selected For Development => In Progress => In Review => Integration => Done

### Step 2: Create A New Workflow In JIRA

In order to create a new workflow, go to the JIRA Settings > Issues > Workflows:

![Bottom left JIRA menu bar highlighting the settings option.](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-left-menu-jira-settings.png?w=676&ssl=1)

Bottom left menu bar

![JIRA cloud settings menu with the Issues menu option highlighted](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-jira-settings-issues-menu.png?w=676&ssl=1)

Select the “Issues” option

![JIRA cloud Issues menu with the Workflow menu option highlighted](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-jira-settings-issues-menu-expanded-options-workflows.png?w=676&ssl=1)

Select the “Workflows” option – If you have trouble to find this expanded menu, press [ on your keyboard or click on the hamburger menu at the top left to expand the Issues menu options.

Now that you know the hard way, I’ll share with you the shortcut. By typing the following URL you can easily access the workflows configuration screen:

```
https://[YOUR ID].atlassian.net/secure/admin/workflows/ListWorkflows.jspa
```

If you landed on the screen below you’re in the right place.

![JIRA cloud workflow configuration screen](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-issues-workflows-configuration-screen.png?fit=676%2C197&ssl=1)

JIRA Cloud – Workflows Configuration Screen

Now, click “Add workflow” to start creating a new one.

![JIRA Cloud - Workflows Configuration Screen - Add Workflow highlighted](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-issues-workflows-configuration-screen-add-workflow.png?fit=676%2C197&ssl=1)

*JIRA Cloud – Workflows Configuration Screen* – Add Workflow

Give a name to your workflow and add a description for it and click “Add”.

![](https://i2.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-issues-workflows-add-workflow-screen.png?w=676&ssl=1)

Once add your new workflow you’ll be presented with the “Workflow Editor” which will be similar to the one below:

![JIRA Cloud - Workflow Editor - Newly Created Workflow](https://i2.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-editor-newly-created-workflow.png?fit=676%2C378&ssl=1)

JIRA Cloud – Workflow Editor – Newly Created Workflow

Now let’s have some fun. I usually first add the statuses I need. In this case, they are:

- Backlog
- Selected for Development
- In Progress
- In Review
- Integration
- Done

![JIRA Cloud workflow editor - adding a new status](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-adding-a-new-status.png?w=676&ssl=1)

JIRA Cloud workflow editor – adding a new status

Don’t mind clicking the “Allow all statuses to transition to this one”. We won’t need that. You’ll notice that for some statuses you’ll have to create new ones since they might not exist yet on your JIRA instance. Don’t worry, just click “new”, provide a description and set the correct category as exemplified below:

![](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-editor-adding-new-status-that-doesnt-exist.png?w=676&ssl=1)

Adding an inexistent status

![](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-create-new-status-screen.png?w=676&ssl=1)

Create New Status Screen

After you added all the statuses, it’s time to wire them up using transitions.

![](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-with-all-statuses.png?fit=676%2C370&ssl=1)

JIRA Workflow with all statuses in place

Click “Show transition status” at the top bar on the workflow editor and let’s move on. Now, reconnect the “Create” transition that is connected to “Open” to the “Backlog” status and delete the “Open” status by selecting it and clicking on “Remove status” as highlighted below:

![JIRA Workflow - Removing a status](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-editor-deleting-a-status.png?fit=676%2C327&ssl=1)

JIRA Workflow – Removing a status

We’re almost there, don’t give up! Now, create the remaining transitions between the statuses. Do that by hovering over the origin status, in this case, “Backlog”, and dragging your mouse until one of the connection points on the target status, which in this case will be the “Selected for Development” status. See the images below for an example:

![](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-adding-a-transition.png?w=676&ssl=1)

JIRA Workflow – Connection point when hovering over a status

![JIRA Cloud - Linking statuses through transitions](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflows-linking-statutes-through-transitions.png?w=676&ssl=1)

JIRA Cloud – Linking statuses through transitions

Now, give a name for your transition and add a description that will help people to understand what will happen when they execute this transition. Once that’s done, click “Add”, and Voilá! You just created your first transition.

![](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-add-transition-screen.png?w=676&ssl=1)

JIRA Cloud – Add Transition

Now repeat the same process for the remaining transitions and in the end you’ll have created your workflow and it should be similar to the one below:

![](https://i2.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-example-workflow.png?fit=676%2C374&ssl=1)

JIRA Cloud – Example workflow

If you reach this far, congratulations! Now you’re very close, just a few more steps and you’ll achieve what you want.

### Step 3: Changing And Publishing the New Workflow

#### Changing The Workflow

Now we have to go to our project settings to change the project’s workflow to the one we just created.

Go to your project and click “Project Settings”.

![JIRA Cloud - Project Settings](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-project-settings.png?w=676&ssl=1)

JIRA Cloud – Project Settings

Once in the project settings, click “Workflows”.

![](https://i2.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-project-settings-workflow.png?w=676&ssl=1)

JIRA Cloud – Project settings – Workflows

You have now two options, you can either change the workflow scheme or add an existing workflow. In our case, we want to add an existing workflow. So, click on “Add workflow” > “Add existing” and choose the one you created in the previous step on the selection screen.

![JIRA Cloud - Project settings - Workflows - Add Existing Workflow](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-project-settings-workflows-add-existing.png?w=676&ssl=1)

*JIRA Cloud – Project settings – Workflows* – Add Existing Workflow

![JIRA Cloud - Project settings - Workflows - Add Existing Workflow - Selection Screen](https://i0.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-project-settings-add-existing-workflow-selection-screen.png?w=676&ssl=1)

*JIRA Cloud – Project settings – Workflows – Add Existing Workflow* – Selection Screen

Now, click “Next”, assign all the issue types to the new workflow and click “Finish”.

![JIRA Cloud - Project settings - Workflows - Add Existing - Assign Issue Types](https://i2.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-project-settings-workflow-add-existing-assign-issue-types.png?w=676&ssl=1)

*JIRA Cloud – Project settings – Workflows – Add Existing – Assign Issue Types*

Great, now you should see the workflow screen again with the new workflow being displayed! Great!

![](https://i2.wp.com/jcfausto.com/wp-content/uploads/2019/06/changed-unpublished-workflow.png?fit=676%2C307&ssl=1)

JIRA Cloud – Workflows – Changed but Unpublished Workflow

#### Publishing The Changed Workflow

Now, click “Publish”. You’ll go through a two-step process. On step 1, click “Associate”. Wait for step 2 to finish and click “Acknowledge”.

![](https://i1.wp.com/jcfausto.com/wp-content/uploads/2019/06/jira-cloud-workflow-changed-aknowledgement.png?fit=676%2C168&ssl=1)

JIRA Cloud – Workflow changed – Acknowledge step

---

Congratulations! You did it!

Congratulations! You did it!!!

[convertkit form=959929]

### Step 4: Check The Result

I usually check after every workflow change if everything is working as expected. I advise you to do the same. Create a test issue and make sure it can flow through your workflow as expected.

## Conclusion

Creating a JIRA workflow might not be as hard as you think if you just get to know some basic concepts and understand how to wire things up in JIRA. To make things easier, I prepared a one-pager that will help you with this task. You can download it for free below.

If you’re working with a different version of JIRA, perhaps JIRA Server and are having trouble to figure out how to do it, just let me know on the comments below and I’ll do my best to help you.

---

*Disclaimer*

*I’m not affiliated with Atlassian, the owner, and creator of JIRA, nor receive any benefits for creating this tutorial from Atlassian. This tutorial is totally independent and based on my own experience. Any mistakes, inaccuracies or misinterpretations are my own.*
