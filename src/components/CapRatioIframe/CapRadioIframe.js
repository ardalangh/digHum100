import React from 'react';

function CapRadioIframe(props) {
    return (
        <div>
            <iframe
                title="California Fire History"
                src="https://projects.capradio.org/california-fire-history/#7/39.043/-123.053"
                width="100%"
                height="600"
                frameBorder="0"
            ></iframe>
        </div>
    );
}

export default CapRadioIframe;