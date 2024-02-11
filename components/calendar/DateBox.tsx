export function DateBox({date}: {date: Date}) {
    return (
        <div>
            <p>{date.getDate()}</p>
        </div>
    );
};