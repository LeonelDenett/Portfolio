export const idsSkills = [1,2,3,4,5,6,7,8,9];
export const names = ['CSS', 'HTML', 'React', 'R/Native', 'Node.js', 'Symfony', 'UI Design', 'Figma'];
export const percentages = ['90%', '90%', '80%', '70%', '60%', '70%' , '70%', '60%'];
export const values = [90,90,80,70,60,70,70,60];
export const css = [
    {width: '90.1%'},
    {width: '90.1%'},
    {width: '80.1%'},
    {width: '70.1%'},
    {width: '60.1%'},
    {width: '70.1%'},
    {width: '70.1%'},
    {width: '60.1%'}
];

export var skills = idsSkills.map((id, index) => {
    return {
        id: id,
        name: names[index],
        percentage: percentages[index],
        value: values[index],
        css: css[index]
    }
});