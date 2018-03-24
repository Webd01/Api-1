import { addAnime, addSeason, updateAnime } from "./animes";
import { addAuthor, deleteAuthor, updateAuthor } from "./authors";
import { addMedia, updateMedia, linkMedia, deleteMedia } from "./medias";
import { addNews, updateNews, deleteNews } from "./news";
import { delNotification } from "./notifications";
import { addTag, deleteTag, updateTag } from "./tags";
import { addSlide, editSlide, delSlide } from "./slider";

import {
	acceptFriendRequest,
	delFriend,
	sendFriendsRequests,
	setAvatar,
	updateUsers
} from "./users";

export {
	//ANIME
	addAnime,
	addSeason,
	updateAnime,
	//AUTHOR
	addAuthor,
	deleteAuthor,
	updateAuthor,
	//MEDIA
	addMedia,
	updateMedia,
	linkMedia,
	deleteMedia,
	//NEWS
	addNews,
	updateNews,
	deleteNews,
	//NOTIFICATIONS
	delNotification,
	//TAGS
	addTag,
	deleteTag,
	updateTag,
	//USER
	acceptFriendRequest,
	delFriend,
	sendFriendsRequests,
	setAvatar,
	updateUsers,
	//SLIDER
	addSlide,
	editSlide,
	delSlide
};

export function hello(root, { name }, context) {
	context.pubsub.publish("test", { name, licorne: "magique" });
	return `hello ${name}!`;
}