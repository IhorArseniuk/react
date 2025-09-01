import type {CommentModel} from "../../models/comentModel.ts";
import './comment.css'
type CommentProps={
    comment:CommentModel
}
export function CommentComponent({comment:{id,name,email,body}}:CommentProps) {
    return (
        <div className={'comment'}>
            <h1 className={'id'}>{id}</h1>
            <h2 className={'name'}>{name}</h2>
            <a className={'email'} href={'mailto:'+email}>email</a>
            <p className={'text'}>{body}</p>
        </div>
    );
}
