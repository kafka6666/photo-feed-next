const photos = [
    {
        id: "1",
        title: "The Beautiful Nature",
        url: "https://picsum.photos/id/10/800/600",
        tags: ["nature", "river", "ocean"],
        views: "6M",
        share: "2.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://picsum.photos/id/64/100/100",
            name: "John Doe",
            bio: "I am a photographer in Michigan USA",
            followers: 220
        },
        likes: 100
    },
    {
        id: "2",
        title: "The Beautiful Sunset",
        url: "https://picsum.photos/id/11/800/600",
        tags: ["sunset", "beach", "ocean"],
        views: "4M",
        share: "1.56M",
        uploaded: "2024-01-30",
        author: {
            avatar: "https://picsum.photos/id/65/100/100",
            name: "Jane Doe",
            bio: "I am a photographer in California USA",
            followers: 150
        },
        likes: 80
    },
    {
        id: "3",
        title: "Mountain View",
        url: "https://picsum.photos/id/12/800/600",
        tags: ["mountain", "nature", "landscape"],
        views: "3M",
        share: "1.2M",
        uploaded: "2024-01-29",
        author: {
            avatar: "https://picsum.photos/id/66/100/100",
            name: "Mike Smith",
            bio: "Nature photographer from Colorado",
            followers: 180
        },
        likes: 90
    }
];

export const getAllPhotos = () => {
    return photos;
}

export const getPhotoById = (id) => {
    return photos.find(photo => photo.id === id);
}