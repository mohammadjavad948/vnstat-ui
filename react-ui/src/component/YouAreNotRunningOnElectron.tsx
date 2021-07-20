
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
                fontSize: '18px',
                color: 'white',
            }}>
                You are not running the app on electron :(
            </span>
        </div>
    )
}
