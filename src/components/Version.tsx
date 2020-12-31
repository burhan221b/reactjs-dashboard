import React from 'react';

export interface VersionProps {

}

const Version: React.FunctionComponent<VersionProps> = () => {
    return (
        <div className="version">Version 1.0.0</div>
    );
}

export default Version;