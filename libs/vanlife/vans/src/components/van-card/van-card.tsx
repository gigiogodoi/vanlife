import styles from './van-card.module.css';
import { Link } from 'react-router-dom';
import { VanType, VanTypeBadge } from '@vanlife/vanlife/shared';
import { useVansFilter } from '../../hooks';

/* eslint-disable-next-line */
export interface VanCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: VanType;
}

export function VanCard({ id, name, price, imageUrl, type }: VanCardProps) {
  //TODO: REMOVER
  const { queryString, filterType } = useVansFilter();

  return (
    <div className={styles['container']}>
      <Link
        to={`${id}`}
        state={queryString && { search: queryString, filterType: filterType }}
      >
        <img className={styles['card-image']} src={imageUrl} alt={name} />
        <div className={styles['card-summary']}>
          <label className={styles['card-van-name']}>{name}</label>
          <label className={styles['card-van-price']}>${price}</label>
        </div>
        <VanTypeBadge type={type} />
      </Link>
    </div>
  );
}

export default VanCard;
