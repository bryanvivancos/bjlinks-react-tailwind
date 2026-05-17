import { memo } from 'react';
import '../../styles/App.css';
import sprite from '../../assets/sprite.svg';

const SkillItem = memo(({ url, skill, ico }) => {
    const UpperSkill = skill.charAt(0).toUpperCase() + skill.slice(1);

    return <a href={url}
        target="_blank"
        aria-label={`${skill}`}
        title={`Ver más sobre ${UpperSkill}`}
        className={`p-2 max-md:size-12 size-16 xs:size-20 flex items-center justify-center rounded-full hover:scale-110 transition-transform`}
    >
        {ico ?
            (<img src={ico} alt={`icono ${skill}`} loading="lazy" decoding="async" />) :
            (<svg width="50" height="50">
                <use href={`${sprite}#${skill}`} />
            </svg>)
        }
    </a>
});

SkillItem.displayName = 'SkillItem';

export default SkillItem;