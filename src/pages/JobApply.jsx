import React from 'react';
import { useParams } from 'react-router';

const JobApply = () => {
    const{id} = useParams()
    console.log(id);
    return (
        <div>
            Job Apply Page
        </div>
    );
};

export default JobApply;