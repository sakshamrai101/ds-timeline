import React, { useState } from 'react';
import Milestone from './Milestone';

import garba from '../images/garba.jpg';
import thanksgiving from '../images/thanksgiving.JPG';
import first_date from '../images/first_date.png';
import le_grand from '../images/le_grand_october_2024.jpeg';
import new_years_concert from '../images/New_Years_First_Concert_2023_Jan.png';
import vegas from '../images/vegas_march_2024.jpeg';
import basement from '../images/march_2023.JPG';
import death_company from '../images/August_2024_death_ci.JPG';
import metro from '../images/sept_metro_boomin_2024.png';
import axe from '../images/axe_throwing_feb_2024.png';
import otta_birthday from '../images/April_2024.png';
import birch from '../images/june_2023.png';
import gaslamp from '../images/July2024.png';
import grad from '../images/June_2024.png';
import valentine from '../images/unknown.png';
import yasai from '../images/hmm.png';
import photoshoot from '../images/may_2024.jpeg';
import bhoot from '../images/halloween_2023.jpg';
import bear from '../images/Big_Bear_2023.JPG';
import naya_saal from '../images/naya_saal_2024.png';
import posty from '../images/posty_aug_2023.png';
import marine from '../images/marine_room.png';
import ghar from '../images/ghar_july_2023.png';
import long from '../images/long_distancing_sept_2023.PNG';

const timelineData = [
    {
        id: 1,
        title: 'Post Garba, the day I decided this little hottie is gonna be mine :)',
        date: 'October 17, 2022',
        description: 'My place, after helping Khush throw up n all, I took a selfie video of us, this is a ss from that :)',
        imageUrl: garba,
    },
    {
        id: 2,
        title: 'Thanksgiving, a touch family in the US',
        date: 'November 25, 2022',
        description: 'Both of us leaned against the kitchen counter, giggled, talked and gave away our cover - to Sukhman and Dhwanil',
        imageUrl: thanksgiving,
    },
    {
        id: 3,
        title: 'Launch Day, "Ungrey-Area Day", or in normal words: First Date :)',
        date: 'December 25 2022',
        description: 'I finally asked you out :)',
        imageUrl: first_date
    },
    {
        id: 3,
        title: 'Maroon 5, New Years :)',
        date: 'January 1st 2023',
        description: 'The singalongs, the after party, that influencer chick complimenting you and the big mexican fella chatting me up, also you fell :0',
        imageUrl: new_years_concert,
    },
    {
        id: 4,
        title: 'First Valentines :)',
        date: 'February 14th 2023',
        description: 'First time saw you flustered, the dress, the boat, the food andddd the compliments - what a night :)',
        imageUrl: valentine,
    },
    {
        id: 5,
        title: 'Made into The Basement',
        date: 'March 2023',
        description: 'One of our many milestones, good thing with this one - we did it TOGETHER :)',
        imageUrl: basement,
    },
    {
        id: 6,
        title: 'Yasai Night - Finaly ;/',
        date: 'April 19th 2023',
        description: 'Pictures worth a 1000 words, and so was me on the toilet - next day :ooo',
        imageUrl: yasai,
    },
    {
        id: 7,
        title: 'Birch Aqaurium',
        date: 'June 21st, 2023',
        description: 'Created a masterpice here, those little kids outside, and the two puga puis we bought',
        imageUrl: birch,
    },
    {
        id: 8,
        title: 'Ghar ka happiness :)',
        date: 'July 2023',
        description: 'Nothing special here, apart from the fact that we might be the happiest in this picture, amongst all :)',
        imageUrl: ghar,
    },
    {
        id: 9,
        title: 'Post Malone 2023 :)',
        date: 'August 13th, 2023',
        description: 'Posty and a lot of Daaru :)',
        imageUrl: posty,
    },
    {
        id: 10,
        title: 'Just chilling on VC',
        date: 'September 25th, 2023',
        description: 'From my last India trip, after which I stayed in the US for the entire year :)',
        imageUrl: long,
    },
    {
        id: 11,
        title: 'Second - Halloween',
        date: 'October 31st, 2023',
        description: 'Snapped this, when you were getting ready, interestingly the only picture we have of that day (I have MANY videos though).',
        imageUrl: bhoot,
    },
    {
        id: 12,
        title: 'Big Bear 2023',
        date: 'November 26th, 2023',
        description: 'The trip, the food, the fight and finally THE S@X .....',
        imageUrl: bear,
    },
    {
        id: 13,
        title: 'Celebrating a Year of Togetherness :)',
        date: 'December 21st, 2023',
        description: 'I know these set of pictures are not your fav, but in my eyes, we just look so sombre, elegant and classy, I would fight anyone to include this here :)',
        imageUrl: marine,
    },
    {
        id: 14,
        title: 'New Years 2024 :)',
        date: 'January 1st, 2024',
        description: 'No Fancy concerts, no luxurious dinners, just you, me, 3932 Camino Calma and the BEST COCKTAIL NIGHT ONE CAN THINK OFF',
        imageUrl: naya_saal,
    },
    {
        id: 15,
        title: 'Second Valentines Date',
        date: 'February 15th, 2024',
        description: 'The most unconventional, yet my kind of date night - Thank you for putting up with my shenaningans :)',
        imageUrl: axe,
    },
    {
        id: 16,
        title: 'Vegas :)',
        date: 'March 9th, 2024',
        description: 'Took a screenshot from the video, you know how the video after that ended.',
        imageUrl: vegas,
    },
    {
        id: 17,
        title: 'Otta Pui 2nd Birthday :))',
        date: 'April 12th, 2024',
        description: 'So happy to finally be there for your birthday :), hope you liked the gift and the cocktail night I arranged for ya my love :)',
        imageUrl: otta_birthday,
    },
    {
        id: 18,
        title: 'Grad Photo-Shoot :)',
        date: 'May 24th, 2024',
        description: 'I know the beach ones might be more aesthetic, but I just fell in love with this picture. The love is palpable :)',
        imageUrl: photoshoot,
    },
    {
        id: 19,
        title: 'Graduation Picture :)',
        date: 'June 15th, 2024',
        description: 'Everyone: There are so many people, Me: Your Parents, you, my parents and I - all of us in ONE FRAME :)',
        imageUrl: grad
    },
    {
        id: 20,
        title: 'Grand Havannah Cigar Lounge',
        date: 'July 6th, 2024',
        description: 'We went to this Lounge AFTER our Date Night in Gaslamp :)',
        imageUrl: gaslamp,
    },
    {
        id: 21,
        title: 'Death Company Date Night',
        date: 'August 3rd, 2024',
        description: 'I think this was THE DATE - in which both of tried our best to LOOK the best for each other :)',
        imageUrl: death_company,
    },
    {
        id: 22,
        title: 'METRO BOOMIN 2024',
        date: 'September 1st, 2024',
        description: 'Loved the concert, the songs, everything, but what I chersish the most - our own mini concert in the CAR',
        imageUrl: metro,
    },
    {
        id: 23,
        title: 'Most Recent Date Night, Le Grand :)',
        date: 'October 26th, 2024',
        description: 'I remember how sharp you looked, and what a blessing those 3 photo frames were, glad we kept it :)',
        imageUrl: le_grand,
    },
];

function Timeline() {
    const [selectedMilestone, setSelectedMilestone] = useState(null);

    const handleMilestoneClick = (milestone) => {
        setSelectedMilestone(milestone);
    };

    return (
        <div className="timeline-container">
            <div className="timeline">
                {timelineData.map((milestone) => (
                    <Milestone
                        key={milestone.id}
                        milestone={milestone}
                        onClick={() => handleMilestoneClick(milestone)}
                    />
                ))}
            </div>
            {selectedMilestone && (
                <div className="milestone-detail">
                    <h2>{selectedMilestone.title}</h2>
                    <p>{selectedMilestone.date}</p>
                    <img src={selectedMilestone.imageUrl} alt={selectedMilestone.title} />
                    <p>{selectedMilestone.description}</p>
                    <button onClick={() => setSelectedMilestone(null)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Timeline;
