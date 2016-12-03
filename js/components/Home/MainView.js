import React from 'react'
import { connect } from 'react-redux';
import ArticleList from '../ArticleList';

const mapStateToProps = state => ({
    articles: state.articles
});

const MainView = props => {
    return (
        <div className='nine columns'>
            <div className='feed-toggle'>
                <ul className='nav nav-pilss outline-active'>
                    <li classnmae='nav-item'>
                        <a
                            href=''
                            className='nav-link active'>
                            Global Feed
                        </a>
                    </li>
                </ul>
            </div>
            <ArticleList articles={props.articles} />
        </div>
    )
}

export default connect(mapStateToProps, () => ({}))(MainView);