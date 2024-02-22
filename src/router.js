import {createBrowserRouter} from "react-router-dom";
import {CommentsPage} from "./pages/CommentsPage";
import {ToDoPage} from "./pages/ToDoPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement:<ErrorPage/>, children: [
            {
                path: 'comments', element: <CommentsPage/>, children:[
                    {
                        path:'post', element: <PostPage/>
                    }
                ]
            },
            {
                path: 'todos', element: <ToDoPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            }
        ]
    }
])

export {
    router
}