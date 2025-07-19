function fetchUser(quotesToken, callback) {

    $.ajax({
        url: '/api/fetch-user',
        method: 'POST',
        async:false,
        data: {
            token: quotesToken
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            'Authorization': quotesToken
        },
        success: function (response) {
            if (typeof callback === "function") {
                callback(response);
            }
        },
        error: function (xhr) {
            console.error('Error fetching user:', xhr);
        }
    });
}