
import Task from './Task.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: Task,  // コンポーネント自体
  title: 'Task',  // Storybook サイドバーでコンポーネントをグループ化または分類する方法
  tags: ['autodocs'], // コンポーネントのドキュメントを自動的に生成します
  //👇 Our events will be mapped in Storybook UI
  argTypes: { // 引数を指定
    onPinTask: {},
    onArchiveTask: {},
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};