const photos = [
    {
        id: "jk2h42h3-klrk54-lklk32lk-k4l5763k-jkl62625",
        title: "The Beautiful Nature",
        url: "https://source.unsplash.com/NTGg2rtWDwg",
        tags: ["nature", "river", "ocean"],
        views: "6M",
        share: "2.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://source.unsplash.com/random",
            name: "John Doe",
            bio: "I am a photographer in Michigan USA",
            followers: 220
        },
        likes: 100
    },
    {
        id: "4h2k4h2k-4h2k4h2k-4h2k4h2k-4h2k4h2k-4h2k4h2k",
        title: "The Beautiful Sunset",
        url: "https://source.unsplash.com/4h2k4h2k",
        tags: ["sunset", "beach", "ocean"],
        views: "4M",
        share: "1.56M",
        uploaded: "2024-01-30",
        author: {
            avatar: "https://source.unsplash.com/random",
            name: "Jane Doe",
            bio: "I am a photographer in California USA",
            followers: 150
        },
        likes: 50
    },
    {
        id: "lkjlkjlk-lkjlkjlk-lkjlkjlk-lkjlkjlk-lkjlkjlk",
        title: "The Beautiful Mountain",
        url: "https://source.unsplash.com/lkjlkjlk",
        tags: ["mountain", "river", "nature"],
        views: "3M",
        share: "1.20M",
        uploaded: "2024-01-29",
        author: {
            avatar: "https://source.unsplash.com/random",
            name: "Bob Smith",
            bio: "I am a photographer in Colorado USA",
            followers: 100
        },
        likes: 20
    },
    {
        id: "hi6t89y2-pqr543-stu876-vwx321",
        title: "Street Life",
        url: "https://source.unsplash.com/nqZzjnV3xog",
        tags: ["street", "people", "urban"],
        views: "3.4M",
        share: "1.5M",
        uploaded: "2024-02-08",
        author: {
            avatar: "https://source.unsplash.com/random",
            name: "Lisa Park",
            bio: "Street photographer in NYC",
            followers: 432
        },
        likes: 567
    },
    {
        id: "jk8w12z4-def789-ghi012-jkl345",
        title: "Ocean Waves",
        url: "https://source.unsplash.com/8PMvB4VyVXA",
        tags: ["ocean", "waves", "nature"],
        views: "4.7M",
        share: "1.9M",
        uploaded: "2024-02-03",
        author: {
            avatar: "https://source.unsplash.com/random",
            name: "Mark Rodriguez",
            bio: "Ocean photographer in California",
            followers: 891
        },
        likes: 823
    },
    {
        id: "lm9x34a6-mno678-pqr901-stu234",
        title: "Forest Mysteries",
        url: "https://source.unsplash.com/1Z2niiBPg5A",
        tags: ["forest", "nature", "mystical"],
        views: "3.2M",
        share: "1.3M",
        uploaded: "2024-02-14",
        author: {
            avatar: "https://source.unsplash.com/random",
            name: "Anna Kowalski",
            bio: "Forest and nature photographer",
            followers: 445
        },
        likes: 678
    },
    {
        id: "np0y45b7-vwx567-yza890-bcd123",
        title: "City Nights",
        url: "https://source.unsplash.com/UOavP_Z38lE",
        tags: ["city", "night", "urban"],
        views: "5.5M",
        share: "2.3M",
        uploaded: "2024-02-07",
        author: {
            avatar: "https://source.unsplash.com/random",
            name: "James Lee",
            bio: "Night photography specialist",
            followers: 567
        },
        likes: 945
    },
    {
        id: "qr1z56c8-efg456-hij789-klm012",
        title: "Mountain Lake",
        url: "https://source.unsplash.com/Bkci_8qcdvQ",
        tags: ["lake", "mountains", "nature"],
        views: "4.1M",
        share: "1.7M",
        uploaded: "2024-02-11",
        author: {
            avatar: "https://source.unsplash.com/random",
            name: "Sophie Martin",
            bio: "Alpine photographer",
            followers: 334
        },
        likes: 789
    }
];

export const getAllPhotos = () => {
    return photos;
}

export const getPhotoById = (id) => {
    return photos.find(photo => photo.id === id);
}