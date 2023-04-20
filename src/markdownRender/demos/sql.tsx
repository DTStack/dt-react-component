import React, { useEffect, useState } from 'react';
import { MarkdownRender } from 'dt-react-component';

const md = `
以下是一段 sql 语法

\`\`\`sql
 select count(*) from a;
-- name sqltest 
-- type sql 
-- create time 2022-11-09 16:13:45 
-- desc


-- create table employees(name string);
insert into employees values('1111');


select * from employees
\`\`\`
`;

export default () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(md);
    }, []);

    return (
        <div style={{ maxHeight: 400, overflow: 'auto', marginBottom: 16 }}>
            <MarkdownRender value={value} />
        </div>
    );
};
