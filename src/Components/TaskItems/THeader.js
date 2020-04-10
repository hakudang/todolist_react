import React, { Component } from 'react';

class THeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Công việc</th>
                    <th className="text-center">Nhãn</th>
                    <th className="text-center">Độ ưu tiên</th>
                    <th className="text-center">Người thực hiện</th>
                    <th className="text-center">Thao tác</th>
                    <th className="text-center">Tình trạng</th>
                </tr>
            </thead>
        );
    }
}

export default THeader;