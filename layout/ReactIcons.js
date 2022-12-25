import * as SiIcon from 'react-icons/si';


export const ReactIcons = (props) => {
  const { icon, iconClass } = props;

  const { ...icons } = SiIcon;
  
  const Icon = icons[icon];

  const classes = [
    `${iconClass ? iconClass : ''}`,
  ];

  return (
    
    <Icon className={classes} />
  );
};