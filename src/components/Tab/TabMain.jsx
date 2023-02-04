import { useState } from 'react';
import Tabs from './Tabs';

function TabUI({ header, border, themeTab, list }) {
    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);

    return (
        <div className="tabUI">
            <Tabs header={header} border={border} themeTab={themeTab} active={active} onChange={handleChange}>
                {list.map((item, index) => (
                    <div key={index} title={item.title}>
                        {item.content}
                    </div>
                ))}
            </Tabs>
        </div>
    );
}

export default TabUI;
