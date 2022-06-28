import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import LocationIcon from '@mui/icons-material/LocationOn';

const User = () => {
    return (
        <div className='user'>
            <img src="images/avatar.jpg" alt="Manfred Parbatia" />
            <h1 className="user__name">Manfred Parbatia</h1>
            <p className="user__profession">Développeur Web</p>
            <div className="user__infos">
                <p className="user__info"><HomeIcon />12 rue de Paris 41270 Droué</p>
                <p className="user__info"><a href="tel:+33674964468"><PhoneIcon /> 0674964468</a></p>
                <p className="user__info"><a href="mailto:superflyman90@gmail.com"><MailIcon /> superflyman90@gmail.com</a></p>
                <p className="user__info"><EventIcon /> Date de naissance: 11 mars 1981</p>
                <p className="user__info"><LocationIcon /> Lieu de naissance: Saint-Benoit de la Réunion</p>                
            </div>
        </div>
    );
};

export default User;