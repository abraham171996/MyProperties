// PropertyCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../../../../service/Service';
import styles from '../../../../RentalDetails/rentalDetails.module.scss';
import SkeletonLoader from '../../../../SkeletonLoader';
interface PropertyCardProps {
    showSkeleton: boolean;  
  card: any;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ card ,showSkeleton}) => {
  return (
    <Link to={`/rentList/${card.slug.current}`}>
      {
        showSkeleton ? (<SkeletonLoader width={"90%"} height={100} style={{marginLeft:"20px",marginTop:"24px"}}/>):(
            <div className={styles.Properties__cards__card}>
        <figure>
          <img src={`${urlFor(card.image)}`} alt="" />
        </figure>
        <div className={styles.Properties__cards__card__content}>
          <h4>{card.title}</h4>
          <p>{card.location}</p>
        </div>
        <div className={styles.Properties__cards__card__status}>
          <p
            className={card.categories.map((e: any) => {
              if (e === 'ACTIVE') return styles.active;
              if (e === 'ARCHIVE') return styles.archive;
              return styles.maintenance;
            }).join(' ')}
          >
            {card.categories}
          </p>
          <span>{card.price}</span>
        </div>
      </div>
        )
      }
    </Link>
  );
};

export default PropertyCard;
