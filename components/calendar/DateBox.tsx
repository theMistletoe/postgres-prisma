export function DateBox({date}: {date: Date}) {
    return (
        <div>
            <p>{date.getDate()}</p>
            <p>{['日', '月', '火', '水', '木', '金', '土'][date.getDay()]}</p>
        </div>
    );
};