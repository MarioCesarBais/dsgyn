import './main.css'
import Header from './Header'

export default props =>
    <div>
        <Header {...props} />
        <main className="content">
            <div className="p-3">
                {props.children}
            </div>
        </main>
    </div>