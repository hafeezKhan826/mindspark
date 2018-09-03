export const ApiSettings = {
    API: {
        homeDetails: 'Student/GetHomeDetails',
        topics: {
            get: 'Student/GetMyTopics',
            open: 'Student/OpenTopic',
            highGrades: 'Student/GetTopicForOtherGrades',
            topicTrail: 'Student/GetTopicTrail',
            topicDetails: 'Student/GetTopicDetails'
        },
        worksheets: {
            get: 'Student/GetMyWorksheets',
            open: 'Student/OpenWorksheet',
            fetchWorksheet: 'Student/FetchWorksheetContent',
            submitWorksheetQuestion: 'Student/SubmitWorksheetQuestion',
            quitWorksheet: 'Student/QuitWorksheet'
        },
        myDetails: {
            get: 'Student/GetMyDetails',
            update: 'Student/UpdateMyDetails',
            updateProfilePic: 'Student/UpdateProfilePic'
        },
        favouritesQuestion: {
            get: 'Student/GetFavouritesList',
            remove: 'Student/RemoveFromFavourities'
        },
        listActivity: 'Student/ListActivity',
        openActivity: 'Student/OpenActivity',
        getMyProgress: 'Student/GetMyProgress',
        getWorsheetReport: 'Student/GetWorsheetReport',
        getRewardsInfo: 'Student/GetRewardsInfo',
        mailBox: {
            getMailbox: 'Student/GetMailbox',
            getMessageTrail: 'Student/GetMessageTrail',
            writeToMindspark: 'Student/WriteToMindspark',
            replyToMessage: 'Student/ReplyToMessage',
            saveRating: 'Student/SaveRating'
        },
        startTopicHigherLevel: {
            get: 'startHigherLevelTopics/StartHigherLevelTopics'
        },
        auth: {
            getMyPasswordType: 'Student/GetMyPasswordType',
            changePassword: 'Student/UpdateMyPassword',
            logout: 'Student/Logout'
        },
        question: {
            firstContent: 'Student/FetchFirstContent',
            submitAnswer: 'Student/SubmitQuestionAttempt',
            updateAnswer: 'Student/UpdateQuestionAttempt',
            submitActivity: 'Student/SubmitActivityAttempt',
            saveActivity: 'Student/SaveActivityAttempt',
            sessionReport: 'Student/GetTopicSessionReport',
            startTopicHigherLevel: 'Student/StartTopicHigherLevel',
            closeContent: 'Student/CloseContent',
            addToFavourities: 'Student/AddToFavourities',
            quitTopicHigherLevel: 'Student/QuitTopicHigherLevel'
        }
    }
};
