import loadable from '@loadable/component';
import { IconType } from 'react-icons';


export const IconComponent = ({ icon, size }) => {
  const lib = icon.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ')[0].toLowerCase();
  const DynamicIconComponent = loadable(() => import(`react-icons/${lib}/index.js`), { resolveComponent: (el) => el[icon] });

  return <DynamicIconComponent size={size} />;
};