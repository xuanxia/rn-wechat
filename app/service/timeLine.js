/**
 * Created by kangxiaojian on 2017/9/4.
 */
module.exports = app => {
    class TimeLineService extends app.Service {
        constructor(ctx){
            super(ctx);
            this.model = this.ctx.model;

        }
        async createTimeLine(timeLine){
            const timeLineResult = await this.model.TimeLine.create({
                createUser:timeLine.createUser,
                content:timeLine.content,
                praiseUser:timeLine.praiseUser,
                picture:timeLine.picture,
                comment:timeLine.comment,
            });
            return createTimeLine;
        }
    }
    return TimeLineService;
};

