
export default function YouAreNotRunningOnElectron(){

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1c2028'
        }}>
            <span style={{
                fontSize: '22px',
                color: 'white',
                fontWeight: 700,
            }}>
                You are not running the app on electron 😕
            </span>
        </div>
    )
}
