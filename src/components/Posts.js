import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    
    render() {

        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Here is the list of all the Posts</h1><br/>
                { postItems }
            </div>
        )
    }
}

Posts.propTypes = {
    // Rules to define what type annotation is being given to certain prop names.
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.allPosts, 
    // this.props.posts = state.posts.allPosts where posts 
    // in state comes from combineReducer property.
    newPost: state.posts.newPost
    // newPost reflect to the name which is going to be accessed
    // by this class (props).
})

export default connect(mapStateToProps, { fetchPosts })(Posts);