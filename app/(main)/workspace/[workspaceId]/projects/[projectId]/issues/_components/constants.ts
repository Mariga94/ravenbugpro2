interface issueType {
    label: string;
    value: string;
    icon: string;
}

interface priorityType {
    label: string;
    value: string;
    icon: ''
}

interface statusType {
    label: string;
    value: string;
}

export const issueTypes: issueType[] = [
    {
        label: 'Bug',
        value: 'bug',
        icon: ''
    },
    {
        label: 'Task',
        value: 'task',
        icon: ''
    },
    {
        label: 'New Feature',
        value: 'new feature',
        icon: ''
    },
    {
        label: 'Improvement',
        value: 'improvement',
        icon: ''
    }
]

export const priorities: priorityType[] = [
    {
        label: 'High',
        value: 'high',
        icon: ''
    },
    {
        label: 'Medium',
        value: 'medium',
        icon: ''
    },
    {
        label: 'Low',
        value: 'low',
        icon: ''
    }
]

export const status:statusType[] = [
    {
        label: 'To Do',
        value: 'todo'
    },
    {
        label: 'In Progress',
        value: 'in progress'
    },
    {
        label: 'In Review',
        value: 'in review'
    },
    {
        label: 'Done',
        value: 'done'
    }
]

export const reporter = []