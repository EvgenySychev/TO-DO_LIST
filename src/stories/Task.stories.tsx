import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {AddItemForm} from "../AddItemForm";
import {Task} from "../Task";
import {TaskType} from "../Todolist";

export default {
  title: 'TODOLIST/Task',
  component: Task,
  args: {changeTaskStatus: action('changeTaskStatus'), //здесь написали общие аргументы, которые используются в истории
    changeTaskTitle: action('changeTaskTitle'),
    removeTask: action('removeTask'),
    todolistId: 'sdgfsdg'

  },

  argTypes: { //пояснения, аннотация
    addItem: {
      description: 'button clicked inside form'
    },
  },
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStories = Template.bind({});

TaskIsDoneStories.args = {
  task: {id: 'dsfgd', title: 'JS', isDone: true},
} ;

export const TaskIsNotDoneStories = Template.bind({});

TaskIsNotDoneStories.args = {
  task: {id: 'dsfgd', title: 'HTML', isDone: false},
}
