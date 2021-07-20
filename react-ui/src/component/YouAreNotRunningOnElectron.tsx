
export default function YouAreNotRunningOnElectron(){

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <span style={{
                fontSize: '18px'
            }}>
                You are not running the app on electron.
            </span>
        </div>
    )
}
