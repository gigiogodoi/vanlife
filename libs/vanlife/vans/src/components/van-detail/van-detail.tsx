import styles from './van-detail.module.css';
import GoBackImg from '../../assets/goback.svg';
import { Link } from 'react-router-dom';
import { VanTypeBadge } from '../../components';
import { VanType } from '@vanlife/vanlife/shared';

/* eslint-disable-next-line */
export interface VanDetailProps {
  imageUrl: string;
  type: VanType;
  name: string;
  price: number;
  description: string;
}

export function VanDetail({
  imageUrl,
  type,
  name,
  price,
  description,
}: VanDetailProps) {
  return (
    <div className={styles['container']}>
      <Link to="/vans">
        <img src={GoBackImg} alt="Goback" style={{ marginRight: '0.5em' }} />{' '}
        Back to all vans
      </Link>
      <img src={imageUrl} alt={name} />
      <VanTypeBadge type={type} />
      <h1>{name}</h1>
      <label>
        ${price}
        <span>/day</span>
      </label>
      <text>{description}</text>
      <button>Rent this van</button>
    </div>
  );
}

export default VanDetail;
