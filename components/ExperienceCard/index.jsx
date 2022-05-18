import { CardStyled, CardTitle } from '../../styles/components';
import { Period, Role, Achievements, Achievent } from './styles';
import { cardAnimation } from '../../animations/global';

const ExperienceCard = ({ place }) => {
  return (
    <CardStyled href={place.link} target="_blank" rel="noopener noreferrer" variants={cardAnimation}>
      <CardTitle>{place.name}</CardTitle>
      <Role>{place.role}</Role>
      <Period>
        {place.startDate}
        {place.endDate ? ` - ${place.endDate}` : ''}
      </Period>
      <Achievements>
        {place.achievements?.map((achievement) => (
          <Achievent key={achievement.id}>
            <span>{achievement.icon || '✨'}</span>
            {achievement.text}
          </Achievent>
        ))}
      </Achievements>
    </CardStyled>
  );
};

export default ExperienceCard;
