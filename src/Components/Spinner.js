import React from 'react';
import loading from './loading.gif';

class Spinner extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className="text-center">
            <img src={loading}  alt="Loading" />
        </div>;
    }
}

export default Spinner;