import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';


export const HeroIcons = (props) => {
  const { icon, iconClass, outline = false } = props;

  const { ...icons } = outline ? OutlineIcons : SolidIcons;

  
  const Icon = icons[icon];

  const classes = [
    `${iconClass ? iconClass : ''}`,
  ];

  return (
    
    <Icon className={classes} />
  );
};