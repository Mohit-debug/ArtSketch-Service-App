import React from 'react';
import eventdata from '../../data/eventdata.json';

const Event = () => {
    return (
        <div className="flex flex-col justify-center items-center py-4 space-y-8 px-10 lg:px-16 pt-20">
            {eventdata.map((event, index) => (
                <div key={index} className="w-full">
                    <div className="justify-center flex flex-col lg:flex-row items-center lg:items-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="text w-full lg:w-1/2 px-4 font-heading text-2xl xs:text-6xl font-bold text-gray-900 font-serif italic">
                            <p>{event.title}</p>
                            <br />
                            <p>{event.description}</p>
                            <br />
                            <p>{event.postDate}</p>
                        </div>
                        <div className="profile flex-shrink-0 w-full lg:w-1/6 pt-1/4">
                            <img src={event.src} alt={`Event ${index + 1}`} className="w-full h-auto object-cover" />
                        </div>
                    </div>
                    {index < eventdata.length - 1 && (
                        <hr className="border-dotted border-t-2 border-gray-600 my-8 w-4/5 mx-auto" />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Event;
