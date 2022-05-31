const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '17/05/2019 9:00 AM',
      isLoggedIn: false
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '17/05/2019 9:30 AM',
      isLoggedIn: true
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '17/05/2019 9:45 AM',
      isLoggedIn: true
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '17/05/2019 9:50 AM',
      isLoggedIn: false
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '17/05/2019 10:00 AM',
      isLoggedIn: false
    }
  ];

const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [{ userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 },{userId:'Afaf',rate:2}],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];


  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return day + '/' + month + '/' + year + ' ' + strTime;
}

const randomId = len => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const signUp = (id, email, password, username) => {
    users.push(
        {
            _id: randomId(),
            username: username,
            email: email,
            password: password,
            createdAt: getDate(),
            isLoggedIn: true
        }
    )
}

const signIn = (username, password) => {
    users.forEach(user => {
        if (user.username === username && user.password === password) {
            return true;
        }
        else if (user.username === username && user.password !== password) {
            return false;
        }
    })
}

const rateProduct = (productId, userId, rate) => {
    products.forEach(product => {
        if (product._id === productId) {
            product.ratings.push({ userId: userId, rate: rate });
        }
    })
}

const averateRating = (productId) => {
    let sum = 0;
    let count = 0;
    products.forEach(product => {
        if (product._id === productId) {
            product.ratings.forEach(rating => {
                sum += rating.rate;
                count++;
            })
        }
    })
    return sum / count;
}

const likeProduct = (productId, userId) => {
    products.forEach(product => {
        if (product._id === productId) {
            product.likes.push(userId);
        }
    })
}