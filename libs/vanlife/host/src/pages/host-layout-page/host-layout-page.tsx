import { Navbar, NavbarOption } from '@vanlife/vanlife/shared';
import { Outlet } from 'react-router-dom';
import styles from './host-layout-page.module.css';

/* eslint-disable-next-line */
export interface HostLayoutPageProps {}

const options = [
  {
    text: 'Dashboard',
    target: '/host',
  },
  {
    text: 'Income',
    target: '/host/income',
  },
  {
    text: 'Vans',
    target: '',
  },
  {
    text: 'Reviews',
    target: '/host/reviews',
  },
] as NavbarOption[];

export function HostLayoutPage(props: HostLayoutPageProps) {
  return (
    <>
      <div className={styles['container']}>
        <Navbar options={options} defaultOption={options[0].text} />
      </div>
      <Outlet />
    </>
  );
}

export default HostLayoutPage;
